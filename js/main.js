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

const title = `
<div class="titlebar">
    <div class="button" v-for="item in menuItems">
        <h1 class="menu-text" v-on:click="click(item.id)" v-bind:class="{ 'active': elements[item.id], 'inactive': !elements[item.id] }">{{ item.text }}</h1>
        <template v-for="sub in item.subMenu">
            <menu-item class="menu-item-text" :text="sub.text" :active="elements[item.id]"></menu-item>
        </template>
    </div>
</div>
`;
const activeObject = {
    elements: {
        a: false,
        b: false,
        c: false,
    },
    click: (which) => {
        if (activeObject.elements[which]) {
            activeObject.elements[which] = false;
            return;
        }
        Object.keys(activeObject.elements).forEach((key) => activeObject.elements[key] = false);
        activeObject.elements[which] = true;
    },
    menuItems: [
        { id: "a", text: "kek A", subMenu: [{ text: "hi1" }, { text: "hi2" }] },
        { id: "b", text: "kek B", subMenu: [{ text: "hi1" }, { text: "hi2" }] },
        { id: "c", text: "kek C", subMenu: [{ text: "hi1" }, { text: "hi2" }] },
    ],
};

Vue.component("title-bar", {
    template: title,
    data: () => {
        return activeObject;
    }
});

Vue.component("card-item", {
    props: ["card"],
    template: "<li>{{ card.text }}</li>"
});

const app = new Vue({
    el: "#app",
    data: {
        cardList: [
            { text: "Asah, dude. 1", isActive: false },
            { text: "Asah, dude. 2", isActive: false },
            { text: "Asah, dude. 3", isActive: false },
            { text: "Asah, dude. 4", isActive: false },
            { text: "Asah, dude. 6", isActive: false },
            { text: "Asah, dude. 7", isActive: false },
            { text: "Asah, dude. 8", isActive: false },
            { text: "Asah, dude. 9", isActive: false },
            { text: "Asah, dude. 10", isActive: false },
            { text: "Asah, dude. 11", isActive: false },
            { text: "Asah, dude. 12", isActive: false },
            { text: "Asah, dude. 13", isActive: false },
            { text: "Asah, dude. 14", isActive: false },
            { text: "Asah, dude. 15", isActive: false },
            { text: "Asah, dude. 16", isActive: false },
            { text: "Asah, dude. 17", isActive: false },
            { text: "Asah, dude. 18", isActive: false },
        ],
        message: "Hello Vue!",
    }
});