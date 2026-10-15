/**
 * BeatEngine — boom-bap loop 100 % generado por código (Web Audio API).
 * Sin archivos de audio, sin problemas de copyright.
 *
 * IMPORTANTE: los navegadores bloquean el autoplay con sonido, por eso el
 * motor solo arranca dentro de un gesto del usuario (pulsación del toggle).
 * Volumen moderado por defecto y parada al ocultar la pestaña.
 */

const BPM = 92;
const STEPS = 32; // 2 compases de 16 semicorcheas
const SWING = 0.14;

const KICK = new Set([0, 6, 10, 16, 22, 26]);
const SNARE = new Set([4, 12, 20, 28]);
const OPEN_HAT = new Set([30]);
// Bajo (Hz): A1, A1, G1, Bb1
const BASS: Record<number, number> = { 0: 55, 10: 55, 16: 49, 26: 58.27 };

function noiseBuffer(ctx: AudioContext, seconds = 1): AudioBuffer {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

class BeatEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private timer: number | null = null;
  private step = 0;
  private nextTime = 0;
  playing = false;
  volume = 0.32;

  private ensure(): void {
    if (this.ctx) return;
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    // Ligero lowpass para pegada lo-fi
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 9000;
    this.master.connect(filter).connect(this.ctx.destination);
    this.noise = noiseBuffer(this.ctx, 1.5);
    this.startCrackle();
  }

  /** Crepitación de vinilo sutil en bucle. */
  private startCrackle(): void {
    if (!this.ctx || !this.master || !this.noise) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const lp = this.ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 3200;
    const g = this.ctx.createGain();
    g.gain.value = 0.012;
    src.connect(lp).connect(g).connect(this.master);
    src.start();
  }

  private kick(t: number): void {
    if (!this.ctx || !this.master) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.exponentialRampToValueAtTime(44, t + 0.12);
    g.gain.setValueAtTime(0.95, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.26);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.3);
  }

  private snare(t: number): void {
    if (!this.ctx || !this.master || !this.noise) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const bp = this.ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1900;
    bp.Q.value = 0.9;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.55, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    src.connect(bp).connect(g).connect(this.master);
    src.start(t, Math.random());
    src.stop(t + 0.2);
    // Cuerpo tonal
    const osc = this.ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 190;
    const og = this.ctx.createGain();
    og.gain.setValueAtTime(0.3, t);
    og.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    osc.connect(og).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.12);
  }

  private hat(t: number, open: boolean): void {
    if (!this.ctx || !this.master || !this.noise) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const hp = this.ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 7500;
    const g = this.ctx.createGain();
    const dur = open ? 0.28 : 0.045;
    g.gain.setValueAtTime(open ? 0.22 : 0.16, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(hp).connect(g).connect(this.master);
    src.start(t, Math.random());
    src.stop(t + dur + 0.02);
  }

  private bass(t: number, freq: number): void {
    if (!this.ctx || !this.master) return;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.42);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  private scheduleStep(step: number, t: number): void {
    if (KICK.has(step)) this.kick(t);
    if (SNARE.has(step)) this.snare(t);
    if (step % 2 === 0) this.hat(t, false);
    else if (step % 4 === 3) this.hat(t, false); // 16ths extra con swing
    if (OPEN_HAT.has(step)) this.hat(t, true);
    const b = BASS[step];
    if (b) this.bass(t, b);
  }

  private scheduler = (): void => {
    if (!this.ctx || !this.playing) return;
    const stepDur = 60 / BPM / 4;
    while (this.nextTime < this.ctx.currentTime + 0.12) {
      const isOff16 = this.step % 2 === 1;
      const t = this.nextTime + (isOff16 ? SWING * stepDur : 0);
      this.scheduleStep(this.step, t);
      this.nextTime += stepDur;
      this.step = (this.step + 1) % STEPS;
    }
  };

  /** Debe llamarse desde un gesto de usuario. Devuelve el nuevo estado. */
  async toggle(): Promise<boolean> {
    this.ensure();
    if (!this.ctx) return false;
    if (this.playing) {
      this.pause();
    } else {
      await this.ctx.resume();
      this.playing = true;
      this.step = 0;
      this.nextTime = this.ctx.currentTime + 0.06;
      this.timer = window.setInterval(this.scheduler, 25);
    }
    return this.playing;
  }

  pause(): void {
    this.playing = false;
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    void this.ctx?.suspend();
  }
}

export const beat = new BeatEngine();
export const BEAT_LABEL = `Boom-bap ${BPM} BPM · generado en vivo`;
