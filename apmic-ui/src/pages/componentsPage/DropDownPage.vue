<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">DropdownMenu</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>A Select component with a drop-down menu.</div>
      <div>
        Use label props to put text inside, you can also set the label to show on right by using
        right props.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <DropdownMenu
          v-model="selectedValue"
          :options="dropdownOptions"
          placeholder="Choose an option"
          class="w:200"
        />
      </div>

      <CodeSnippet :code="dropdownCode" language="xml" />
    </div>

    <!-- Validation -->
    <div>
      <div class="f:30 f:bold">Validation</div>
      <div>
        You can pass a validate function into rules props, it will check once you click on it.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <DropdownMenu
          v-model="selectedValue"
          :options="dropdownOptions"
          :rules="mustSelect"
          placeholder="Choose an option"
        />
      </div>

      <CodeSnippet :code="dropdownRuleCode" language="xml" />
    </div>

    <!-- Clearable -->
    <div>
      <div class="f:30 f:bold">Clearable</div>
      <div>
        As a helper, you can use clearable props so user can reset model to null through an appended
        icon.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <DropdownMenu
          v-model="selectedValue"
          :options="dropdownOptions"
          clearable
          placeholder="Choose an option"
        />
      </div>

      <CodeSnippet :code="dropdownClearableCode" language="xml" />
    </div>

    <!-- Modify Slots -->
    <div>
      <div class="f:30 f:bold">Modify Slots</div>
      <div>You can use slots to modify you style of the selected-option, and option-items.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <DropdownMenu
          v-model="selectedValue"
          :options="dropdownOptions"
          clearable
          placeholder="Choose an option"
        >
          <template #selected-option="{ option }">
            {{ option.label }}
          </template>
          <template #placeholder><div class="f:bold">123123</div></template>
          <template #option="{ option }"
            ><div>?_? {{ option.label }}</div></template
          >
        </DropdownMenu>
      </div>

      <CodeSnippet :code="dropdownModifyCode" language="xml" />
    </div>

    <!-- Disable -->
    <div>
      <div class="f:30 f:bold">Disable</div>
      <div>Disable whole components with disable props.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <DropdownMenu
          v-model="selectedValue"
          :options="dropdownOptions"
          clearable
          disable
          placeholder="Choose an option"
        >
          <template #selected-option="{ option }">
            {{ option.label }}
          </template>
          <template #placeholder><div class="f:bold">123123</div></template>
          <template #option="{ option }"
            ><div>?_? {{ option.label }}</div></template
          >
        </DropdownMenu>
      </div>

      <CodeSnippet :code="dropdownDisableCode" language="xml" />
    </div>
  </div>
</template>

<script setup>
import DropdownMenu from '@/components/DropdownMenu.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import { ref } from 'vue'

const selectedValue = ref(null)

const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]

const mustSelect = () => {
  if (!selectedValue.value) {
    return {
      isValid: false,
      errorMessage: 'Must pick sth'
    }
  }
  return {
    isValid: true,
    errorMessage: ''
  }
}

const dropdownCode = `<DropdownMenu
  v-model="selectedValue"
  :options="dropdownOptions"
  :validate-input="mustSelect"
  placeholder="Choose an option"
/>

const selectedValue = ref(null)

const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]
`

const dropdownRuleCode = `<DropdownMenu
  v-model="selectedValue"
  :options="dropdownOptions"
  :rules="mustSelect"
  placeholder="Choose an option"
/>

const selectedValue = ref(null)

const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]

const mustSelect = () => {
  if (!selectedValue.value) {
    return {
      isValid: false,
      errorMessage: 'Must pick sth'
    }
  }
  return {
    isValid: true,
    errorMessage: ''
  }
}
`

const dropdownClearableCode = `<DropdownMenu
  v-model="selectedValue"
  :options="dropdownOptions"
  clearable
  placeholder="Choose an option"
/>

const selectedValue = ref(null)

const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]
`

const dropdownModifyCode = `<DropdownMenu
  v-model="selectedValue"
  :options="dropdownOptions"
  clearable
  placeholder="Choose an option"
>
  <template #selected-option="{ option }">
    {{ option.label }}
  </template>
  <template #placeholder><div class="f:bold">123123</div></template>
  <template #option="{ option }"
    ><div>?_? {{ option }}</div></template
  >
</DropdownMenu>


const selectedValue = ref(null)

const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]`

const dropdownDisableCode = `<DropdownMenu
  v-model="selectedValue"
  :options="dropdownOptions"
  clearable
  disable
  placeholder="Choose an option"
>
  <template #selected-option="{ option }">
    {{ option.label }}
  </template>
  <template #placeholder><div class="f:bold">123123</div></template>
  <template #option="{ option }"
    ><div>?_? {{ option }}</div></template
  >
</DropdownMenu>


const selectedValue = ref(null)

const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]`
</script>
