<template>
  <div class="exampleView">
    {{ value }}
    <CodeEditor :value="codeValue" :handle-change="onCodeChange" />
    <MdEditor :value="mdvalue" :handle-change="onMdChange" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const value = ref();
const codeValue = ref();
const mdvalue = ref();
const onCodeChange = (v: string) => {
  codeValue.value = v;
  console.log(v);
};
const onMdChange = (v: string) => {
  mdvalue.value = v;
  console.log(v);
};
</script>
