({
      jsLoaded: function(component, event, helper) {
          var map = L.map('map', {zoomControl: false}).setView([40.095287, -74.2168384], 16);
          L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
               {
                   attribution: 'Tiles © Esri'
               }).addTo(map);
          component.set("v.map", map);
      },
      accountsLoaded: function(component, event, helper) {
          // Add markers
          var map = component.get('v.map');
          var accounts = event.getParam('accounts');
          for (var i=0; i<accounts.length; i++) {
              var account = accounts[i];
              var latLng = [account.Location__Latitude__s, account.Location__Longitude__s];
              L.marker(latLng, {account: account}).addTo(map);
          }
      },
      handleFindOnMap: function(component, event, helper) {
          var account = event.getParam("account");
          var map = component.get("v.map").setView([account.Location__Latitude__s, account.Location__Longitude__s], 16);
          component.set("v.map", map);
      }
})