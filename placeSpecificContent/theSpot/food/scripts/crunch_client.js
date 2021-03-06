//
// crunch.js
// Play a crunch sound and delete an entity when it is brought close to the head ("Eaten")
//
// Modified by: Elisa Lupin-Jimenez
// Copyright High Fidelity 2018
//
// Licensed under the Apache 2.0 License
// See accompanying license file or http://apache.org/
//
// All assets are under CC Attribution Non-Commerical
// http://creativecommons.org/licenses/
//

(function () {

    var CRUNCH_SOUND_URLS;
    var CRUNCH_SOUNDS = [];

    var VOLUME = 0.5;
    var CHECK_RADIUS = 0.25;
    var LIFETIME = 30;

    var eating = false;

    var _this = this;

    _this.preload = function(entityID) {
        _this.entityID = entityID;
        try {
            CRUNCH_SOUND_URLS = JSON.parse(Entities.getEntityProperties(entityID, "userData").userData).sounds;
            CRUNCH_SOUND_URLS.forEach(function(crunch) {
                CRUNCH_SOUNDS.push(SoundCache.getSound(crunch));
            });
        } catch (err) {
            print("Could not retrieve sound URLs");
        }
        
    };

    var setUpFood = function() {
        Entities.callEntityServerMethod(_this.entityID, 'setupFood');
    };

    _this.startNearGrab = function() {
        setUpFood();
    };

    var checkIfNearHead = function() {
        if (eating) {
            return;
        }
        var position = Entities.getEntityProperties(_this.entityID, "position").position;
        var foodDistance = CHECK_RADIUS * MyAvatar.scale;
        if (Vec3.distance(position, MyAvatar.getJointPosition("Head")) < foodDistance || 
            Vec3.distance(position, MyAvatar.getJointPosition("Neck")) < foodDistance) {
            eating = true;
            playEatingEffect();
        }
    };

    var playEatingEffect = function() {
        var size = CRUNCH_SOUND_URLS.length - 1;
        var index = Math.round(Math.random() * size);
        var crunchSound = CRUNCH_SOUNDS[index];
        Audio.playSound(crunchSound, {volume: VOLUME, position: MyAvatar.getJointPosition("Head")});
        Entities.callEntityServerMethod(_this.entityID, 'deleteFood');
    };

    Script.update.connect(checkIfNearHead);

    _this.unload = function(entityID) {
        Script.update.disconnect(checkIfNearHead);
    };

});
