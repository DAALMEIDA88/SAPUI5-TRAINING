// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/invoices/model/Models",
    "sap/ui/model/resource/ResourceModel"

],
    /** 
    * @param {typeof sap.ui.core.UIComponent} UIComponent
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    */
    function (UIComponent,Models,ResourceModel) {

        return UIComponent.extend("logaligroup.invoices.Component", {


            metadata: {
                 manifest : "json"
                //  "rootView":{
                //      "viewName": "logaligroup.invoices.view.App",
                //      "type" : "XML",
                //      "async": true,
                //      "id" : "app"
                //  }
            },

            init: function () {
                // Call Init function of the parent
                UIComponent.prototype.init.apply(this, arguments);
                
                //Set Data Model    
                this.setModel(Models.createRecipient());

                //Set i18n Model on the view

                var i18nModel = new ResourceModel({ bundleName: "logaligroup.invoices.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });

    });