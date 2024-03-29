<script setup>
import CodePreview from "./components/CodePreview.vue";
import CollapsibleSection from "./components/CollapsibleSection.vue";
import { Input, Section, RadioButton, FileDropZoneInput } from "./index";
import {
  SubmitButton,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
} from "./index";
import { useForm } from "@inertiajs/vue3";
import codePreview from "./codePreview.json";
import Navigation from "./Navigation.vue";
import H2 from "./HelperComponents/H2.vue";
import Table from "./components/Tables/Table.vue";
import Thead from "./components/Tables/Thead.vue";

const form = useForm({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  subscribe: "",
  img: "",
});
</script>
<template>
  <Navigation>
    <main class="content-container bg-white ml-64 py-8 h-fit w-full">
      <Section class="text-center mx-16 mb-8">
        <h1 class="text-xl">Components showcase</h1>
        <div class="w-4 h-4 bg-primary rounded-full inline-block" />
        Primary
        <div class="w-4 h-4 bg-accent rounded-full inline-block" />
        Accent
      </Section>

      <!-- * Input -->
      <div class="mb-40">
        <H2 title="Inputs" />

        <h3 id="input" class="gutters text-md mt-5 font-bold"># Input</h3>
        <div class="bg-white py-2 gutters">
          <div class="grid w-full gap-5 py-2 grid-cols-3">
            <Input :form="form" field="name" />
            <Input :form="form" field="name" disabled />
            <Input :form="form" field="name2" noLabel />
            <Input :form="form" field="name3" addon="Name" />
            <Input :form="form" field="name4" submitBtn="Action" />
            <Input :form="form" field="name5" whatsApp="#myUrl" />
          </div>
          <CodePreview :code="codePreview.Input" />
        </div>
        <Table class="gutters mt-4">
          <Thead>
            <Tr>
              <Th>Propertie</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
            <Tr>
              <Td>type</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>field</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>label</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>name</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>required</Td>
              <Td>Boolean</Td>
            </Tr>
            <Tr>
              <Td>disabled</Td>
              <Td>Boolean</Td>
            </Tr>
            <Tr>
              <Td>min</Td>
              <Td>Number | String</Td>
            </Tr>
            <Tr>
              <Td>max</Td>
              <Td>Number | String</Td>
            </Tr>
            <Tr>
              <Td>step</Td>
              <Td>Number | String</Td>
            </Tr>
            <Tr>
              <Td>form</Td>
              <Td>Object</Td>
            </Tr>
            <Tr>
              <Td>addon</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>placeholder</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>noLabel</Td>
              <Td>Boolean</Td>
            </Tr>
            <Tr>
              <Td>submitBtn</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>autofocus</Td>
              <Td>Boolean</Td>
            </Tr>
            <Tr>
              <Td>pattern</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>whatsApp</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>sublabel</Td>
              <Td>String</Td>
            </Tr>
          </tbody>
        </Table>
      </div>

      <!-- * Switch -->
      <div class="my-40">
        <h3 id="switch" class="gutters text-md font-bold"># Switch</h3>

        <div class="bg-white py-2 gutters">
          <div class="flex gap-4 items-center">
            <Input v-bind:form="form" field="subscribe" type="checkbox" />
            <Input
              v-bind:form="form"
              field="subscribe"
              type="checkbox"
              noLabel
            />
            <Input
              v-bind:form="form"
              field="subscribe"
              type="checkbox"
              switchDescription="Description"
              label="MyLabel"
            />
          </div>
          <CodePreview :code="codePreview.Switch" />
        </div>
        <Table class="gutters mt-4">
          <Thead>
            <Tr>
              <Th>Propertie</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
            <Tr>
              <Td>switchDescription</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>noLabel</Td>
              <Td>Boolean</Td>
            </Tr>
          </tbody>
        </Table>
      </div>

      <!-- * File Input -->
      <div class="my-40">
        <h3 id="file-input" class="gutters text-md font-bold"># File Input</h3>
        <div class="bg-white py-2 hover:bg-gray-100 gutters">
          <div class="flex gap-4 items-center">
            <FileDropZoneInput v-bind:form="form" field="img" />
            <FileDropZoneInput v-bind:form="form" field="img" label="MyLabel" />
          </div>
          <CodePreview :code="codePreview.FileInput" />
        </div>
        <Table class="gutters mt-4">
          <Thead>
            <Tr>
              <Th>Propertie</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
            <Tr>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
            </Tr>
          </tbody>
        </Table>
      </div>

      <!-- * Buttons -->
      <div class="my-40">
        <H2 title="Buttons" />

        <div class="py-2 gutters">
          <div class="flex w-full gap-5 py-2">
            <SubmitButton :form="form">Submit</SubmitButton>
            <PrimaryButton>Primary</PrimaryButton>
            <SecondaryButton>Secondary</SecondaryButton>
            <DangerButton>Danger</DangerButton>
          </div>
          <CodePreview :code="codePreview.Buttons" />
        </div>
        <Table class="gutters mt-4">
          <Thead>
            <Tr>
              <Th>Element</Th>
              <Th>Propertie</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
            <Tr>
              <Td>SubmitButton</Td>
              <Td>type</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>disabled</Td>
              <Td>Boolean</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>form</Td>
              <Td>Object</Td>
            </Tr>
            <Tr>
              <Td>PrimaryButton</Td>
              <Td>type</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>disabled</Td>
              <Td>Boolean</Td>
            </Tr>
            <Tr>
              <Td>SecondaryButton</Td>
              <Td>type</Td>
              <Td>String</Td>
            </Tr>
            <Tr>
              <Td>DangerButton</Td>
              <Td>type</Td>
              <Td>String</Td>
            </Tr>
          </tbody>
        </Table>
      </div>

      <!-- * Sections -->
      <H2 title="Sections" />

      <div class="bg-white py-2 hover:bg-gray-100 gutters">
        <Section class="mb-2" header="MySection" :open="true">
          My Section Data
        </Section>
        <CodePreview :code="codePreview.Section" />
      </div>

      <div class="bg-white py-2 hover:bg-gray-100 gutters">
        <CollapsibleSection
          class="mb-2"
          header="MyCollapsibleSection"
          :open="true"
        >
          My Section Data
        </CollapsibleSection>
        <CodePreview :code="codePreview.CollapsibleSection" />
      </div>
    </main>
  </Navigation>
</template>
