({
    goToLocation : function(component, event, helper) {
        var account = component.get("v.account");
        var findOnMap = $A.get("e.c:AccountClicked");
        findOnMap.setParams({"account": account});
        findOnMap.fire();
    }
})
