<template>
  <div class="drawer-container">
    <div class="input-area">
      <textarea rows="10" v-model="from"></textarea>
      <br />
      <FileReader @load="from = $event"></FileReader>
    </div>

    <div class="actions-area">
      <button @click="execute()">execute</button>
    </div>

    <div class="output-area">
      <div class="result">
        <pre>{{ to }}</pre>
      </div>

      <div class="download-button">
        <button @click="download()">download</button>
      </div>
    </div>
  </div>
</template>

<script>
import { draw } from "./common/draw";
import FileReader from "./FileReader";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      from: "",
      to: "",
    };
  },
  components: {
    FileReader,
  },
  methods: {
    execute() {
      try {
        this.to = draw(this.from);
      } catch (err) {
        alert(err);
      }
    },
    download() {
      const blob = new Blob([this.to], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(blob, "output.txt");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: antiquewhite;
}

.drawer-container {
  display: flex;
}

.input-area {
  flex-grow: 1;
}

.input-area > textarea {
  /* to overrride element.style.width set by brower when resizing textarea */
  width: 100% !important;
}

.output-area {
  flex-grow: 1;
}

.result {
  display: flex;
  border: 1px dashed grey;
  background: white;
  min-height: 150px;
}

.download-button {
  display: inline-block;
  margin: 5px;
}

.actions-area {
  flex-grow: 0;
  display: flex;
  padding: 1rem;
}
</style>
