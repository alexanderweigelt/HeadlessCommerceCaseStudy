import React from 'react';
import { createRoot } from 'react-dom/client';
import { Controller } from '@hotwired/stimulus';
import { App } from "../javascript/app"

/*
 * This is the App Stimulus controller!
 *
 * Any element with a data-controller="app" attribute will cause
 * this controller to be executed. The name "app" comes from the filename:
 * app_controller.js -> "app"
 *
 */
export default class extends Controller {
    root = createRoot(this.element);
    connect() {
        this.root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
    disconnect() {
        this.root.unmount();
    }
}
