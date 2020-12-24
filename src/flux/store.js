import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";
import APIHelper from "../app/utils/apihelper";

let _store = {
    menuVisible: false,
    navItems: getSidebarNavItems(),

    places: [],
    tours: [],
};

class Store extends EventEmitter {
    constructor() {
        super();

        this.registerToActions = this.registerToActions.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);

        Dispatcher.register(this.registerToActions.bind(this));
    }

    registerToActions({ actionType, payload }) {
        switch (actionType) {
            case Constants.TOGGLE_SIDEBAR:
                this.toggleSidebar();
                break;
            case Constants.LIST_PLACES:
                this.getListPlaces();
                break;
            case Constants.LIST_TOURS:
                this.getListTours();
                break;
            default:
        }
    }

    toggleSidebar() {
        _store.menuVisible = !_store.menuVisible;
        this.emit(Constants.CHANGE);
    }

    getListPlaces() {
        APIHelper.get(window.API_DOMAIN + "/api/places?limit=10000&isActive=true").then(data => {
            _store.places = data.places;
            this.emit(Constants.CHANGE);
        }).catch(err => console.log(err));

    }

    getListTours() {
        APIHelper.get(window.API_DOMAIN + "/api/tours?limit=10000&isActive=true").then(data => {
            _store.tours = data.tours;
            this.emit(Constants.CHANGE);
        }).catch(err => console.log(err));
    }

    getTours() {
        return _store.tours;
    }

    getPlaces() {
        return _store.places;
    }
    getMenuState() {
        return _store.menuVisible;
    }

    getSidebarItems() {
        return _store.navItems;
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
    }
}

export default new Store();