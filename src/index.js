//The following imports have been commented out for now, as I believe they are not necessary.
//TODO: Check if these imports are needed in POC. If not => remove them completely
//import $ from 'jquery';
//import bootstrap from 'bootstrap';

import Vue from "vue";
import BsButtonGroup from "./components/bs-button-group";

// This is a list of all our Vue components
export const components = {
    BsButtonGroup
};

//This is a list of all our Vue directives
export const directives = {

};

export default {
    /**
     * This is vue's install method. It is called by Vue's engine when you do Vue.use
     * so this plugin is included
     * @param  {Object]} Vue Vue instance
     * @return {None}    This method doesn't return a value
     */
    install(Vue) {
        //This registers the components and directives in this library with Vue
        //so they can be used in markup directly and without having to do not
        //need to be added later upon definition of another components.
        Object.keys(components).forEach((name) => {
            Vue.component(name, components[name]);
        });
        Object.keys(directives).forEach((name) => {
            Vue.directive(name, directives[name]);
        });
    }
}

// Export all components and directives sepparetely.
export {
    BsButtonGroup
}
