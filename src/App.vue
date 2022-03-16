<script>
export default {
  data() {
    return {
      timer: 0,
      interval: null,
      running: false,
    };
  },
  methods: {
    play() {
      this.interval = setInterval(() => {
        this.timer++;
      }, 1000);
      this.running = true;
    },
    pause() {
      clearInterval(this.interval);
      this.running = false;
    },
    reset() {
      clearInterval(this.interval);
      this.timer = 0;
      this.running = false;
    },
  },
  computed: {
    fullTimer() {
      let minutes = this.timer / 60;
      let seconds = this.timer % 60;

      minutes =
        minutes < 10 ? "0" + minutes.toString(10) : minutes.toString(10);
      seconds =
        seconds < 10 ? "0" + seconds.toString(10) : seconds.toString(10);

      return `${minutes}:${seconds}`;
    },
  },
};
</script>
<template>
  <main class="flex items-center justify-center h-screen">
    <div>
      <div class="text-center text-6xl">
        <span
          id="timer"
          :class="{
            'text-red-500': timer > 0 && !running,
            'text-green-500': running,
          }"
          >{{ fullTimer }}</span
        >
      </div>
      <div class="space-x-10 mt-6">
        <button
          id="play-button"
          @click="play"
          class="transition hover:text-cyan-500 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          id="pause-button"
          @click="pause"
          class="transition hover:text-cyan-500 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          id="reset-button"
          @click="reset"
          class="transition hover:text-cyan-500 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>
