sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",


/**
 *
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast

 */    
], function (Controller, MessageToast, Models, ResourceModel) {
        "use Strict";

        return Controller.extend("logaligroup.invoices.controller.App",{

            onInit: function(){      

            },
            onShowHello: function(){
                // Read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
               // Read Property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }
        });
});