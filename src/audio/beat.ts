/**
 * HouseBeat — música de fondo desde `public/beat.mp3` (beat de la casa).
 *
 * IMPORTANTE: los navegadores bloquean el autoplay con sonido, por eso la
 * reproducción solo arranca dentro de un gesto del usuario (pulsación del
 * toggle). El <audio> se crea de forma perezosa: el MP3 no se descarga
 * hasta que el visitante lo activa. Loop + volumen moderado.
 *
 * Para cambiar el tema: sustituye `public/beat.mp3` por otro MP3
 * (TODO-DATO-17) manteniendo el mismo nombre de archivo.
 */

export const BEAT_LABEL = "Beat de la casa en loop (MP3)";
const BEAT_VOLUME = 0.5;

class HouseBeat {
  private el: HTMLAudioElement | null = null;
  playing = false;

  private ensure(): HTMLAudioElement {
    if (!this.el) {
      const el = new Audio(`${import.meta.env.BASE_URL}beat.mp3`);
      el.loop = true;
      el.preload = "auto";
      el.volume = BEAT_VOLUME;
      el.addEventListener("ended", () => {
        // Seguridad extra si el loop fallara en algún navegador
        if (this.playing) void el.play().catch(() => undefined);
      });
      this.el = el;
    }
    return this.el;
  }

  /** Debe llamarse desde un gesto de usuario. Devuelve el nuevo estado. */
  async toggle(): Promise<boolean> {
    const el = this.ensure();
    if (this.playing) {
      this.pause();
    } else {
      try {
        await el.play();
        this.playing = true;
      } catch {
        this.playing = false;
      }
    }
    return this.playing;
  }

  pause(): void {
    this.playing = false;
    this.el?.pause();
  }
}

export const beat = new HouseBeat();
