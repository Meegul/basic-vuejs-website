const footerTemplate = `
<div class="app-footer">
    <p>test</p>
    <p>test2</p>
</div>
`;

Vue.component("app-footer", {
    template: footerTemplate,
});

const menuItem = `
<div class="menuItem" v-show="active">
    <h1>{{ text }}</h1>
</div>
`;

Vue.component("menu-item", {
    props: ["active", "text"],
    template: menuItem,
});

const titleTemplate = `
<div class="titlebar">
    <div class="button" v-for="(item, index) in menuItems">
        <h1 class="menu-text" v-on:click="click(index)" v-bind:class="{ 'active': item.active, 'inactive': !item.active }">{{ item.text }}</h1>
        <template v-for="sub in item.subMenu">
            <menu-item class="menu-item-text" :text="sub.text" :active="item.active"></menu-item>
        </template>
    </div>
</div>
`;

Vue.component("title-bar", {
    template: titleTemplate,
    data: function() {
        return {
            menuItems: [
                { text: "kek A", active: false, subMenu: [{ text: "hi1" }, { text: "hi2" }] },
                { text: "kek B", active: false, subMenu: [{ text: "hi1" }, { text: "hi2" }] },
                { text: "kek C", active: false, subMenu: [{ text: "hi1" }, { text: "hi2" }] }
            ],
        };
    },
    methods: {
        click: function(index) {
            //If it's already active, set to inactive and return
            if (this.menuItems[index].active) {
                this.menuItems[index].active = false;
                return;
            } else {
                //It's not active. Set all others to inactive and activate
                this.menuItems.forEach((on) => { on.active = false });
                this.menuItems[index].active = true;
            }
        },
    },
});

const demoTemplate = `
<div class="demo">
    <h2>{{ text }}</h2>
    <input v-model="text">
    <button v-on:click="text = text.split('').reverse().join('')">Reverse</button>
</div>
`;

Vue.component("demo", {
    props: ["initialText"],
    data: function() { return { text: this.initialText }; },
    template: demoTemplate,
});

const contentTemplate = `
<div class="content">
    <demo v-bind:initial-text="demoText"></demo>
    <ol>
        <template v-for="item in textList">
            <li v-bind:card="item">{{ item.text }}</li>
            <input v-model="item.text"></input>
        </template>
    </ol>
</div>
`;

Vue.component("app-content", {
    template: contentTemplate,
    props: ["initialDemoText", "initialMessage", "initialTextList"],
    data: function() {
        return {
            demoText: this.initialDemoText,
            message: this.initialMessage,
            textList: this.initialTextList,
        };
    },
});

const app = new Vue({
    el: "#app",
    data: {
        textList: [
            { text: "Asah, dude. 1" },
            { text: "Asah, dude. 2" },
            { text: "Asah, dude. 3" },
            { text: "Asah, dude. 4" },
            { text: "Asah, dude. 6" },
            { text: "Asah, dude. 7" },
            { text: "Asah, dude. 8" },
            { text: "Asah, dude. 9" },
            { text: "Asah, dude. 10" },
            { text: "Asah, dude. 11" },
            { text: "Asah, dude. 12" },
            { text: "Asah, dude. 13" },
            { text: "Asah, dude. 14" },
            { text: "Asah, dude. 15" },
            { text: "Asah, dude. 16" },
            { text: "Asah, dude. 17" },
            { text: "Asah, dude. 18" },
        ],
        demoText: "Hello.",
    },
});