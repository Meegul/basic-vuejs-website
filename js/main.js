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
<div class="dropdown-text" v-on:mouseenter="active=true" v-on:mouseleave="active=false" v-show="shown">
    <h1 :class="{ 'active': active, 'inactive': !active }">{{ text }}</h1>
</div>
`;

Vue.component("menu-item", {
    props: ["shown", "text"],
    data: function() {
        return {
            active: false,
        };
    },
    template: menuItem,
});

const titleTemplate = `
<div class="titlebar" :class="{ 'scrolled': scrolled, 'not-scrolled': !scrolled }">
    <div class="button" v-on:scroll="testScroll()" v-on:mouseenter="focus(index)" v-on:mouseleave="leave(index)" v-for="(item, index) in menuItems">
        <h1 class="menu-text" v-bind:class="{ 'active': item.active, 'inactive': !item.active }">{{ item.text }}</h1>
        <template v-for="sub in item.subMenu">
            <menu-item :text="sub.text" :shown="item.active"></menu-item>
        </template>
    </div>
</div>
`;

Vue.component("title-bar", {
    props: {
        initialMenuItems: {
            type: Array,
            default: [
                { text: "kek A", active: false, subMenu: [{ text: "hi1" }, { text: "hi2" }] },
                { text: "kek B", active: false, subMenu: [{ text: "hi1" }, { text: "hi2" }] },
                { text: "kek C", active: false, subMenu: [{ text: "hi1" }, { text: "hi2" }] }
            ],
        },
    },
    template: titleTemplate,
    data: function() {
        return {
            scrolled: false,
            menuItems: this.initialMenuItems,
        };
    },
    methods: {
        focus: function(index) {
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
        leave: function(index) {
            if (this.menuItems[index].active)
                this.menuItems[index].active = false;
        },
        testScroll: function() {
            this.scrolled = window.scrollY > 0;
        },
    },
    mounted: function() {
        this.$nextTick(function () {
            window.addEventListener('scroll', this.testScroll);
        });
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
    <template v-for="item in textList">
        <li v-bind:card="item">{{ item.text }}</li>
        <input v-model="item.text"></input>
    </template>
</div>
`;

Vue.component("app-content", {
    template: contentTemplate,
    props: ["initialDemoText", "initialTextList"],
    data: function() {
        return {
            demoText: this.initialDemoText,
            textList: this.initialTextList,
        };
    },
});

const app = new Vue({
    el: "#app",
    data: {
        titleList: [
            { text: "1", active: false, subMenu: [
                { text: "sub1" },
                { text: "sub2" },
                { text: "sub3" }
            ]},
            { text: "2", active: false, subMenu: [
                { text: "sub4" },
                { text: "sub5" },
                { text: "sub6" }
            ]},
            { text: "3", active: false, subMenu: [
                { text: "sub7" },
                { text: "sub8" },
                { text: "sub9" }
            ]},
        ],
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