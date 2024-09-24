<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">Buttons</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>
        Contains various style, Aim to provide enough flexibility for developers. Must use
        dark/light props(base on the button background) to show hover/active effect.
      </div>
      <div></div>
      <div>Hint that Hover and Active effect rely on the class dark / light / colorbase.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CommonBtn dark class="bg:#27353a color:white" @click="handleClick">Dark</CommonBtn>
        <CommonBtn light class="bg:#F6F8F9" @click="handleClick">Light</CommonBtn>
        <CommonBtn outline light class="bg:white" @click="handleClick">Outline</CommonBtn>
        <CommonBtn dark class="bg:orange color:white" @click="handleClick">Orange</CommonBtn>
      </div>

      <CodeSnippet :code="btnExample" language="xml" />
    </div>

    <!-- Icon -->
    <div>
      <div class="f:30 f:bold">Icon</div>
      <div>Simply put Icon inside, you can use any Icon pack such as Iconify, or svg instead.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CommonBtn dark class="bg:#27353a color:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          On Left
        </CommonBtn>
        <CommonBtn dark class="bg:#27353a color:white" @click="handleClick">
          On Right
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </CommonBtn>
        <CommonBtn dark class="bg:#27353a color:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </CommonBtn>
      </div>

      <CodeSnippet :code="iconBtn" language="xml" />
    </div>

    <!-- Dense -->
    <div>
      <div class="f:30 f:bold">Dense</div>
      <div>Dense style can be used on Icon also.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CommonBtn dense colorbase class="bg:blue color:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Dense
        </CommonBtn>
        <CommonBtn dense colorbase class="bg:brown color:white" @click="handleClick">
          Dense
        </CommonBtn>
        <CommonBtn dense colorbase class="bg:cyan color:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </CommonBtn>
      </div>

      <CodeSnippet :code="denseBtn" language="xml" />
    </div>

    <!-- Flat -->
    <div>
      <div class="f:30 f:bold">Flat</div>
      <div>
        Flat means no background at all, we preset a font color(gray) here, and please remember to
        add flat into props.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CommonBtn flat class="color:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Flat
        </CommonBtn>
        <CommonBtn flat @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </CommonBtn>
        <CommonBtn flat dense class="color:red!" @click="handleClick"> Flat+Dense </CommonBtn>
      </div>

      <CodeSnippet :code="flatBtn" language="xml" />
    </div>

    <!-- Outline -->
    <div>
      <div class="f:30 f:bold">Outline</div>
      <div>With this class we simply add a border, suggest set bg as white for best effect.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CommonBtn outline light class="bg:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Outline
        </CommonBtn>
        <CommonBtn outline light class="bg:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </CommonBtn>
        <CommonBtn outline dense light class="bg:white color:blue" @click="handleClick">
          Outline+Dense
        </CommonBtn>
      </div>

      <CodeSnippet :code="outlineBtn" language="xml" />
    </div>

    <!-- Disable -->
    <div>
      <div class="f:30 f:bold">Disable</div>
      <div>Simply add filter:opacity(0.5) to button.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CommonBtn dark disable class="bg:#27353a color:white" @click="handleClick">Dark</CommonBtn>
        <CommonBtn dark disable class="bg:red color:white" @click="handleClick">Dark</CommonBtn>
        <CommonBtn outline light disable class="bg:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </CommonBtn>
        <CommonBtn flat disable class="color:white" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Flat
        </CommonBtn>
        <CommonBtn outline dense light disable class="bg:white color:blue" @click="handleClick">
          Outline+Dense
        </CommonBtn>
      </div>

      <CodeSnippet :code="disableBtn" language="xml" />
    </div>
  </div>
</template>

<script setup>
import CommonBtn from '@/components/CommonBtn.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'

const btnExample = `<CommonBtn dark class="bg:#27353a color:white" @click="handleClick">Dark</CommonBtn>
<CommonBtn light class="bg:#F6F8F9" @click="handleClick">Light</CommonBtn>
<CommonBtn outline light class="bg:white" @click="handleClick">Outline</CommonBtn>
<CommonBtn dark class="bg:orange color:white" @click="handleClick">Orange</CommonBtn>`

const iconBtn = `<CommonBtn dark class="bg:#27353a color:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  On Left
</CommonBtn>
<CommonBtn dark class="bg:#27353a color:white" @click="handleClick">
  On Right
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</CommonBtn>
<CommonBtn dark class="bg:#27353a color:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</CommonBtn>`

const denseBtn = `<CommonBtn dense colorbase class="bg:blue color:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  Dense
</CommonBtn>
<CommonBtn dense colorbase class="bg:brown color:white" @click="handleClick"> Dense </CommonBtn>
<CommonBtn dense colorbase class="bg:cyan color:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</CommonBtn>`

const flatBtn = `
<CommonBtn flat class="color:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  Flat
</CommonBtn>
<CommonBtn flat @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</CommonBtn>
<CommonBtn flat dense class="color:red!" @click="handleClick"> Flat+Dense </CommonBtn>`

const outlineBtn = `<CommonBtn outline light class="bg:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  Outline
</CommonBtn>
<CommonBtn outline light class="bg:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</CommonBtn>
<CommonBtn outline dense light class="bg:white color:blue" @click="handleClick">
  Outline+Dense
</CommonBtn>`

const disableBtn = `<CommonBtn dark disable class="bg:#27353a color:white" @click="handleClick">Dark</CommonBtn>
<CommonBtn dark disable class="bg:red color:white" @click="handleClick">Dark</CommonBtn>
<CommonBtn outline light disable class="bg:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</CommonBtn>
<CommonBtn flat disable class="color:white" @click="handleClick">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  Flat
</CommonBtn>
<CommonBtn outline dense light disable class="bg:white color:blue" @click="handleClick">
  Outline+Dense
</CommonBtn>`

const handleClick = () => {
  console.log('btn clicked')
}
</script>
