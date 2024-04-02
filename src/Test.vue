<script setup>
import CodePreview from './components/CodePreview.vue';
import CollapsibleSection from './components/CollapsibleSection.vue';
import {
    Input,
    Section,
    RadioButton,
    FileDropZoneInput,
    DropdownSearchbar,
    Images,
    Td,
    InputLabel,
    SearchSelect,
    Select2ajax,
    Textarea,
    TextInput,
    TrCollapseHandler,
} from './index';
import { SubmitButton, PrimaryButton, SecondaryButton, DangerButton } from './index';
import { useForm } from '@inertiajs/vue3';
import codePreview from './codePreview.json';
import Navigation from './Navigation.vue';
import H2 from './HelperComponents/H2.vue';
import Table from './components/Tables/Table.vue';
import Thead from './components/Tables/Thead.vue';
import Checkbox from './components/Forms/Checkbox.vue';
import Th from './components/Tables/Th.vue';
import InputError from './components/Forms/InputError.vue';
import SelectMultiple from './components/Forms/SelectMultiple.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    subscribe: '',
    img: '',
    checkbox: false,
    option: null,
    ba_country: '',
    note: '',
});
</script>
<template>
    <Navigation>
        <main class="content-container ml-64 h-fit w-full bg-white py-8">
            <Section class="mx-16 mb-8 text-center">
                <h1 class="text-xl">Components showcase</h1>
                <div class="inline-block h-4 w-4 rounded-full bg-primary" />
                Primary
                <div class="inline-block h-4 w-4 rounded-full bg-accent" />
                Accent
            </Section>

            <!-- * Input -->
            <div class="mb-40">
                <H2 title="Inputs" />

                <h3 id="input" class="gutters text-md mt-5 font-bold"># Input</h3>
                <div class="gutters bg-white py-2">
                    <div class="grid w-full grid-cols-3 gap-5 py-2">
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

                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <Input v-bind:form="form" field="subscribe" type="checkbox" />
                        <Input v-bind:form="form" field="subscribe" type="checkbox" noLabel />
                        <Input v-bind:form="form" field="subscribe" type="checkbox" switchDescription="Description" label="MyLabel" />
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

            <!-- * Checkbox -->
            <div class="my-40">
                <h3 id="checkbox" class="gutters text-md font-bold"># Checkbox</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <Checkbox value="value" v-model:checked="form.checkbox" />
                        <Checkbox value="value" @update:checked="(value) => (form.checkbox = value)" />
                        {{ form.checkbox ? 'checked' : 'notChecked' }}
                        <Checkbox checked />
                    </div>
                    <CodePreview :code="codePreview.Checkbox" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>checked</Td>
                            <Td>[Array, Boolean]</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>value</Td>
                            <Td>String</Td>
                            <Td>null</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * File Input -->
            <div class="my-40">
                <h3 id="file-input" class="gutters text-md font-bold"># File Input</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
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
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>accept</Td>
                            <Td>String</Td>
                            <Td>image/*</Td>
                        </Tr>
                        <Tr>
                            <Td>multiple</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>required</Td>
                            <Td>Boolean</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Dropdown search bar -->
            <div class="my-40">
                <h3 id="dropdown-search-bar" class="gutters text-md font-bold"># Dropdown Search Bar</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <DropdownSearchbar :options="['my first option', 'my second option', 'some random option']" />
                        <DropdownSearchbar placeholder="find me" />
                    </div>
                    <CodePreview :code="codePreview.Dropdown" />
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
                            <Td>options</Td>
                            <Td>Array</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Images -->
            <div class="my-40">
                <h3 id="images" class="gutters text-md font-bold"># Images</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex items-center gap-4">
                        <!--<Images
              :images="[{ id: 1, url: 'randomlink' }]"
              :itemType="'stock'"
              :itemId="1"
            />-->
                        Unknown solution encountered $page error
                        <span class="text-danger">fix needed</span>
                    </div>
                    <CodePreview :code="['----']" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>images</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>itemType</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>itemId</Td>
                            <Td>Number</Td>
                        </Tr>
                        <Tr>
                            <Td>canUpload</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>endPoint</Td>
                            <Td>String</Td>
                            <Td>images.store</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Input Error -->
            <div class="my-40">
                <h3 id="input-error" class="gutters text-md font-bold"># Input Error</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex flex-col gap-4">
                        <textarea class="-mb-3">My input</textarea>
                        <InputError message="Something is wrong" />
                    </div>
                    <CodePreview :code="codePreview.InputError" />
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
                            <Td>message</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Input Label -->
            <div class="my-40">
                <h3 id="input-label" class="gutters text-md font-bold"># Input Label</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex flex-col gap-4">
                        <InputLabel value="My Label - 1" />
                        <InputLabel value="My Label - 2" :required="true" />
                        <InputLabel value="My Label - 3" sublabel="subLabel" />
                    </div>
                    <CodePreview :code="codePreview.InputLabel" />
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
                            <Td>value</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>sublabel</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>required</Td>
                            <Td>Boolean</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Radio Button -->
            <div class="my-40">
                <h3 id="radio-button" class="gutters text-md font-bold"># Radio Button</h3>
                <div class="gutters bg-white py-2">
                    <div class="flex gap-4">
                        <RadioButton :value="null" v-model="form.option" id="radioDefault01" :isChecked="true" name="option" label="All" />
                        <RadioButton value="In Stock" v-model="form.option" id="radioDefault02" name="option" label="In Stock" />
                        <RadioButton value="eng_note" v-model="form.option" id="radioDefault03" name="option" label="With Engineer Notes" />
                    </div>
                    <CodePreview :code="codePreview.RadioButton" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>id</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>name</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>value</Td>
                            <Td>String | null</Td>
                        </Tr>
                        <Tr>
                            <Td>isChecked</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * SearchSelect -->
            <div class="my-40">
                <h3 id="search-select" class="gutters text-md font-bold">
                    # Search Select --
                    <span class="text-danger">Fix needed</span>
                </h3>
                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <SearchSelect
                            class="mb-4"
                            :list="[1, 2, 3]"
                            v-model:form="form"
                            field="ba_country"
                            option-value="name"
                            option-text="name"
                            placeholder="Select Country"
                            label="Country"
                        />
                    </div>
                    <CodePreview :code="codePreview.SearchSelect" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                            <Th>Required</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>id</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>list</Td>
                            <Td>Array</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionValue</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionText</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionDisabled</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>disabled</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>noForm</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Search 2 ajax -->
            <div class="my-40">
                <h3 id="search-2-ajax" class="gutters text-md font-bold">
                    # Search 2 ajax --
                    <span class="text-danger">Fix needed -- api endpoint missing</span>
                </h3>

                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <Select2ajax
                            class="mb-4"
                            id="ba_country"
                            label="Country"
                            field="ba_country"
                            :form="form"
                            modelValue="form.ba_country"
                            url="/api/countries"
                            placeholder="Select Country"
                        ></Select2ajax>
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

            <!-- * SelectMultiple -->
            <div class="my-40">
                <h3 id="select-multiple" class="gutters text-md font-bold">
                    # Select Multiple
                    <span class="text-warning">? not sure about that</span>
                </h3>
                <div class="gutters py-2">
                    <div class="flex w-full gap-5 py-2">
                        <SelectMultiple
                            id="ba_country"
                            label="Country"
                            :list="[
                                { id: 1, name: 'India' },
                                { id: 2, name: 'USA' },
                                { id: 3, name: 'UK' },
                            ]"
                            optionValue="id"
                            optionText="name"
                            placeholder="Select Country"
                            field="ba_country"
                            :form="form"
                        />
                    </div>
                    <CodePreview :code="codePreview.SelectMultiple" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                            <Th>Required</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>id</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>list</Td>
                            <Td>Array</Td>
                            <Td>[]</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionValue</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>optionText</Td>
                            <Td>String</Td>
                            <Td></Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>placeholder</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>form</Td>
                            <Td>Object</Td>
                        </Tr>
                        <Tr>
                            <Td>noLabel</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td>isDisabled</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Textarea -->
            <div class="my-40">
                <h3 id="textarea" class="gutters text-md font-bold"># Textarea</h3>
                <div class="gutters py-2">
                    <Textarea :form="form" field="note" label="Note" rows="4" />
                    <CodePreview :code="codePreview.Textarea" />
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
                            <Td>field</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>label</Td>
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
                            <Td>form</Td>
                            <Td>Object</Td>
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
                            <Td>autofocus</Td>
                            <Td>Boolean</Td>
                        </Tr>
                        <Tr>
                            <Td>modelValue</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>rows</Td>
                            <Td>Number</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Textinput -->
            <div class="my-40">
                <h3 id="text-input" class="gutters text-md font-bold"># Text Input</h3>
                <div class="gutters py-2">
                    <TextInput :form="form" field="name" label="Name" modelValue="myValue" />
                    <CodePreview :code="codePreview.TextInput" />
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
                            <Td>modelValue</Td>
                            <Td>String</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Buttons -->
            <div class="my-40">
                <H2 title="Buttons" />

                <div class="gutters py-2">
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
            <div class="my-40">
                <H2 title="Sections" />

                <div class="gutters bg-white py-2">
                    <Section class="mb-2" header="MySection" :open="true">My Section Data</Section>
                    <CodePreview :code="codePreview.Section" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>header</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>overflow</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <div class="my-40">
                <div class="gutters bg-white py-2">
                    <CollapsibleSection class="mb-2" header="MyCollapsibleSection" :open="true">My Section Data</CollapsibleSection>
                    <CodePreview :code="codePreview.CollapsibleSection" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>header</Td>
                            <Td>String</Td>
                        </Tr>
                        <Tr>
                            <Td>open</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * Table -->
            <div class="my-40">
                <H2 title="Table" />

                <div class="gutters bg-white py-2">
                    <Table
                        class="w-full"
                        :total="30"
                        :links="[
                            { url: '#table', label: 'label - 1' },
                            { url: '#table', label: 'label - 2' },
                            { url: '#table', label: 'label - 3' },
                            { url: '#table', label: 'label - 4' },
                        ]"
                        :sticky="true"
                    >
                        <Thead>
                            <Tr>
                                <Th>Header 1</Th>
                                <Th>Header 2</Th>
                                <Th>Header 3</Th>
                            </Tr>
                        </Thead>
                        <tbody>
                            <Tr>
                                <Td>Row 1 - Col 1</Td>
                                <Td>Row 1 - Col 2</Td>
                                <Td>Row 1 - Col 3</Td>
                            </Tr>
                            <Tr>
                                <Td>Row 2 - Col 1</Td>
                                <Td>Row 2 - Col 2</Td>
                                <Td>Row 2 - Col 3</Td>
                            </Tr>
                            <Tr>
                                <Td>Row 3 - Col 1</Td>
                                <Td>Row 3 - Col 2</Td>
                                <Td>Row 3 - Col 3</Td>
                            </Tr>
                            <TrCollapse>
                                <Td>Row 4 - Col 1</Td>
                                <Td>Row 4 - Col 2</Td>
                                <Td>Row 4 - Col 3</Td>
                            </TrCollapse>
                            <TrCollapseHandler>
                                <Td>Row 4 - Col 1</Td>
                                <Td>Row 4 - Col 2</Td>
                                <Td>Row 4 - Col 3</Td>
                            </TrCollapseHandler>
                        </tbody>
                    </Table>
                    <CodePreview :code="codePreview.Table" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Element</Th>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>Table</Td>
                            <Td>total</Td>
                            <Td>Number</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>links</Td>
                            <Td>Array</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>collapsable</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>sticky</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>overflow</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>Th</Td>
                            <Td>orderBy</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>TrCollapse</Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                        <Tr>
                            <Td>TrCollapseHandler</Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>

            <!-- * TableItemCard -->
            <div class="my-40">
                <H2 title="TableItemCard" />

                <div class="gutters bg-white py-2">
                    <Table
                        class="w-full"
                        :total="30"
                        :links="[
                            { url: '#table', label: 'label - 1' },
                            { url: '#table', label: 'label - 2' },
                            { url: '#table', label: 'label - 3' },
                            { url: '#table', label: 'label - 4' },
                        ]"
                        :sticky="true"
                    >
                        <Thead>
                            <Tr>
                                <Th>Header 1</Th>
                                <Th>Header 2</Th>
                                <Th>Header 3</Th>
                            </Tr>
                        </Thead>
                        <tbody>
                            <Tr>
                                <Td>Row 1 - Col 1</Td>
                                <Td>Row 1 - Col 2</Td>
                                <Td>Row 1 - Col 3</Td>
                            </Tr>
                            <Tr>
                                <Td>Row 2 - Col 1</Td>
                                <Td>Row 2 - Col 2</Td>
                                <Td>Row 2 - Col 3</Td>
                            </Tr>
                            <Tr>
                                <Td>Row 3 - Col 1</Td>
                                <Td>Row 3 - Col 2</Td>
                                <Td>Row 3 - Col 3</Td>
                            </Tr>
                            <TrCollapse>
                                <Td>Row 4 - Col 1</Td>
                                <Td>Row 4 - Col 2</Td>
                                <Td>Row 4 - Col 3</Td>
                            </TrCollapse>
                            <TrCollapseHandler>
                                <Td>Row 4 - Col 1</Td>
                                <Td>Row 4 - Col 2</Td>
                                <Td>Row 4 - Col 3</Td>
                            </TrCollapseHandler>
                        </tbody>
                    </Table>
                    <CodePreview :code="codePreview.Table" />
                </div>
                <Table class="gutters mt-4">
                    <Thead>
                        <Tr>
                            <Th>Element</Th>
                            <Th>Propertie</Th>
                            <Th>Type</Th>
                            <Th>Default</Th>
                        </Tr>
                    </Thead>
                    <tbody class="[&>*:nth-child(odd)]:bg-gray-50">
                        <Tr>
                            <Td>Table</Td>
                            <Td>total</Td>
                            <Td>Number</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>links</Td>
                            <Td>Array</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>collapsable</Td>
                            <Td>Boolean</Td>
                            <Td>false</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>sticky</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td></Td>
                            <Td>overflow</Td>
                            <Td>Boolean</Td>
                            <Td>true</Td>
                        </Tr>
                        <Tr>
                            <Td>Th</Td>
                            <Td>orderBy</Td>
                            <Td>String</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>TrCollapse</Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                        <Tr>
                            <Td>TrCollapseHandler</Td>
                            <Td>collapse_id</Td>
                            <Td>String</Td>
                            <Td>collapse</Td>
                        </Tr>
                    </tbody>
                </Table>
            </div>
        </main>
    </Navigation>
</template>
