Log.info("Cold Vegetables Mod: script loading");

Events.on(ClientLoadEvent, event => {
    Log.info("ClientLoadEvent");

    if(!Vars.headless){
        Vars.ui.hudfrag.showToast(
            "Cold Vegetables Mod loaded"
        );
    }
});

Events.on(WorldLoadEvent, event => {
    Log.info("WorldLoadEvent");
    Log.info("Map size: @ x @",
        Vars.world.width(),
        Vars.world.height()
    );
});

Events.on(WaveEvent, event => {
    Log.info("Wave started: @", Vars.state.wave);
});

Events.on(BlockBuildEndEvent, event => {
    if(event.tile == null) return;

    if(event.breaking){
        Log.info(
            "Block removed at: @, @",
            event.tile.x,
            event.tile.y
        );
    }else{
        Log.info(
            "Block built: @ at @, @",
            event.tile.block().name,
            event.tile.x,
            event.tile.y
        );
    }
});