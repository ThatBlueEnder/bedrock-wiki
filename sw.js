if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.4d4be30b.js",revision:null},{url:"assets/404.md.4d4be30b.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.c89ae6b8.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.c89ae6b8.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.1ecd5c3b.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.1ecd5c3b.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.074b3c88.js",revision:null},{url:"assets/animation-controllers_death-commands.md.074b3c88.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.be68c66c.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.be68c66c.lean.js",revision:null},{url:"assets/animation-controllers_index.md.88abee5e.js",revision:null},{url:"assets/animation-controllers_index.md.88abee5e.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.c7551629.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.c7551629.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.964b0c06.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.964b0c06.lean.js",revision:null},{url:"assets/app.f8804187.js",revision:null},{url:"assets/blocks_applying-effects.md.b70d891c.js",revision:null},{url:"assets/blocks_applying-effects.md.b70d891c.lean.js",revision:null},{url:"assets/blocks_block-materials.md.bd6cbc31.js",revision:null},{url:"assets/blocks_block-materials.md.bd6cbc31.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.864c03e3.js",revision:null},{url:"assets/blocks_block-shapes.md.864c03e3.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.98e00e52.js",revision:null},{url:"assets/blocks_block-sounds.md.98e00e52.lean.js",revision:null},{url:"assets/blocks_block-tags.md.b2ba3c04.js",revision:null},{url:"assets/blocks_block-tags.md.b2ba3c04.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.1c733408.js",revision:null},{url:"assets/blocks_block-texture-variation.md.1c733408.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.ce443a43.js",revision:null},{url:"assets/blocks_blocks-experimental.md.ce443a43.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.40eb4857.js",revision:null},{url:"assets/blocks_blocks-intro.md.40eb4857.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.bdd8d0a9.js",revision:null},{url:"assets/blocks_blocks-stable.md.bdd8d0a9.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.9b0ee2db.js",revision:null},{url:"assets/blocks_custom-crops.md.9b0ee2db.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.4f68de08.js",revision:null},{url:"assets/blocks_custom-fluids.md.4f68de08.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.cfb754b6.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.cfb754b6.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.e97e2b68.js",revision:null},{url:"assets/blocks_custom-trees.md.e97e2b68.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.f9a836e7.js",revision:null},{url:"assets/blocks_fake-blocks.md.f9a836e7.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.63fbd5da.js",revision:null},{url:"assets/blocks_flipbook-textures.md.63fbd5da.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.53a6fa8d.js",revision:null},{url:"assets/blocks_head-like-rotation.md.53a6fa8d.lean.js",revision:null},{url:"assets/blocks_index.md.98214b6b.js",revision:null},{url:"assets/blocks_index.md.98214b6b.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.7d5557f8.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.7d5557f8.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.7c122b29.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.7c122b29.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.507da9d2.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.507da9d2.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.8f897081.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.8f897081.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.c76c0be2.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.87cf20b5.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.a5dc8d77.js",revision:null},{url:"assets/commands_block-states.md.a5dc8d77.lean.js",revision:null},{url:"assets/commands_damage.md.a1115f91.js",revision:null},{url:"assets/commands_damage.md.a1115f91.lean.js",revision:null},{url:"assets/commands_entity-counter.md.3b415add.js",revision:null},{url:"assets/commands_entity-counter.md.3b415add.lean.js",revision:null},{url:"assets/commands_index.md.e1075340.js",revision:null},{url:"assets/commands_index.md.e1075340.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.1438c6a8.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.1438c6a8.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.af3de24d.js",revision:null},{url:"assets/commands_mcfunctions.md.af3de24d.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.bf534037.js",revision:null},{url:"assets/commands_nbt-commands.md.bf534037.lean.js",revision:null},{url:"assets/commands_new-execute.md.28ad7cab.js",revision:null},{url:"assets/commands_new-execute.md.28ad7cab.lean.js",revision:null},{url:"assets/commands_on-first-join.md.2594750b.js",revision:null},{url:"assets/commands_on-first-join.md.2594750b.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.d53b279c.js",revision:null},{url:"assets/commands_on-first-world-load.md.d53b279c.lean.js",revision:null},{url:"assets/commands_on-player-death.md.fa355052.js",revision:null},{url:"assets/commands_on-player-death.md.fa355052.lean.js",revision:null},{url:"assets/commands_on-player-join.md.84c12332.js",revision:null},{url:"assets/commands_on-player-join.md.84c12332.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.72dd8d68.js",revision:null},{url:"assets/commands_on-player-leave.md.72dd8d68.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.17218bf2.js",revision:null},{url:"assets/commands_on-player-respawn.md.17218bf2.lean.js",revision:null},{url:"assets/commands_playsound.md.0c7388f2.js",revision:null},{url:"assets/commands_playsound.md.0c7388f2.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.49779768.js",revision:null},{url:"assets/commands_relative-coordinates.md.49779768.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.0742785a.js",revision:null},{url:"assets/commands_scoreboard-operations.md.0742785a.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.9655beab.js",revision:null},{url:"assets/commands_scoreboard-timers.md.9655beab.lean.js",revision:null},{url:"assets/commands_selectors.md.3fc82733.js",revision:null},{url:"assets/commands_selectors.md.3fc82733.lean.js",revision:null},{url:"assets/commands_tellraw.md.88746182.js",revision:null},{url:"assets/commands_tellraw.md.88746182.lean.js",revision:null},{url:"assets/concepts_contents.md.b3aafbc0.js",revision:null},{url:"assets/concepts_contents.md.b3aafbc0.lean.js",revision:null},{url:"assets/concepts_emojis.md.e887cf5c.js",revision:null},{url:"assets/concepts_emojis.md.e887cf5c.lean.js",revision:null},{url:"assets/concepts_index.md.187fbb99.js",revision:null},{url:"assets/concepts_index.md.187fbb99.lean.js",revision:null},{url:"assets/concepts_molang.md.f8d07050.js",revision:null},{url:"assets/concepts_molang.md.f8d07050.lean.js",revision:null},{url:"assets/concepts_namespaces.md.dd31af76.js",revision:null},{url:"assets/concepts_namespaces.md.dd31af76.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.ecf83edb.js",revision:null},{url:"assets/concepts_overwriting-assets.md.ecf83edb.lean.js",revision:null},{url:"assets/concepts_shaders.md.3904353c.js",revision:null},{url:"assets/concepts_shaders.md.3904353c.lean.js",revision:null},{url:"assets/concepts_sounds.md.31241c3e.js",revision:null},{url:"assets/concepts_sounds.md.31241c3e.lean.js",revision:null},{url:"assets/concepts_subpacks.md.e35dbd73.js",revision:null},{url:"assets/concepts_subpacks.md.e35dbd73.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.af8b93b6.js",revision:null},{url:"assets/concepts_text-and-translations.md.af8b93b6.lean.js",revision:null},{url:"assets/concepts_textures-list.md.b9d5783e.js",revision:null},{url:"assets/concepts_textures-list.md.b9d5783e.lean.js",revision:null},{url:"assets/contribute-how-to.md.23f2e502.js",revision:null},{url:"assets/contribute-how-to.md.23f2e502.lean.js",revision:null},{url:"assets/contribute-style.md.0f516028.js",revision:null},{url:"assets/contribute-style.md.0f516028.lean.js",revision:null},{url:"assets/contribute.md.beb1dff3.js",revision:null},{url:"assets/contribute.md.beb1dff3.lean.js",revision:null},{url:"assets/discord.md.a8fe7470.js",revision:null},{url:"assets/discord.md.a8fe7470.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.c1f92db8.js",revision:null},{url:"assets/documentation_advanced-molang.md.c1f92db8.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.c39320a4.js",revision:null},{url:"assets/documentation_creative-categories.md.c39320a4.lean.js",revision:null},{url:"assets/documentation_file-types.md.161115bf.js",revision:null},{url:"assets/documentation_file-types.md.161115bf.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.4d9681ae.js",revision:null},{url:"assets/documentation_fog-ids.md.4d9681ae.lean.js",revision:null},{url:"assets/documentation_index.md.f07933d2.js",revision:null},{url:"assets/documentation_index.md.f07933d2.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.d43b6128.js",revision:null},{url:"assets/documentation_material-config-description.md.d43b6128.lean.js",revision:null},{url:"assets/documentation_materials.md.3cd7b6ad.js",revision:null},{url:"assets/documentation_materials.md.3cd7b6ad.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.cd4ed630.js",revision:null},{url:"assets/documentation_pack-structure.md.cd4ed630.lean.js",revision:null},{url:"assets/documentation_projectiles.md.b3aad6dc.js",revision:null},{url:"assets/documentation_projectiles.md.b3aad6dc.lean.js",revision:null},{url:"assets/documentation_queries.md.964c77a4.js",revision:null},{url:"assets/documentation_queries.md.964c77a4.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.344fc41c.js",revision:null},{url:"assets/documentation_shared-constructs.md.344fc41c.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.44159a75.js",revision:null},{url:"assets/documentation_sound-definitions.md.44159a75.lean.js",revision:null},{url:"assets/entities_boat-entities.md.cbbdbd4f.js",revision:null},{url:"assets/entities_boat-entities.md.cbbdbd4f.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.592d3c4e.js",revision:null},{url:"assets/entities_detecting-other-entities.md.592d3c4e.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.4460d267.js",revision:null},{url:"assets/entities_disabling-team-damage.md.4460d267.lean.js",revision:null},{url:"assets/entities_dummy-components.md.2b949504.js",revision:null},{url:"assets/entities_dummy-components.md.2b949504.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.da15b364.js",revision:null},{url:"assets/entities_dummy-entities.md.da15b364.lean.js",revision:null},{url:"assets/entities_entity-attack.md.fcc33f97.js",revision:null},{url:"assets/entities_entity-attack.md.fcc33f97.lean.js",revision:null},{url:"assets/entities_entity-events.md.785d412b.js",revision:null},{url:"assets/entities_entity-events.md.785d412b.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.4bfd18c7.js",revision:null},{url:"assets/entities_entity-holds-item.md.4bfd18c7.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.a7ea45d3.js",revision:null},{url:"assets/entities_entity-intro-bp.md.a7ea45d3.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.16995a2d.js",revision:null},{url:"assets/entities_entity-intro-rp.md.16995a2d.lean.js",revision:null},{url:"assets/entities_entity-movement.md.9978344f.js",revision:null},{url:"assets/entities_entity-movement.md.9978344f.lean.js",revision:null},{url:"assets/entities_entity-properties.md.a9e26ed8.js",revision:null},{url:"assets/entities_entity-properties.md.a9e26ed8.lean.js",revision:null},{url:"assets/entities_flying-entities.md.e7712e51.js",revision:null},{url:"assets/entities_flying-entities.md.e7712e51.lean.js",revision:null},{url:"assets/entities_index.md.3f461a47.js",revision:null},{url:"assets/entities_index.md.3f461a47.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.0fa6aaca.js",revision:null},{url:"assets/entities_introduction-to-aec.md.0fa6aaca.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1a968b8c.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1a968b8c.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.63497015.js",revision:null},{url:"assets/entities_look-at-entity.md.63497015.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.319664fb.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.319664fb.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.7ddb3bcd.js",revision:null},{url:"assets/entities_npc-dialogs.md.7ddb3bcd.lean.js",revision:null},{url:"assets/entities_render-controllers.md.f6d420ee.js",revision:null},{url:"assets/entities_render-controllers.md.f6d420ee.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.7d37e30a.js",revision:null},{url:"assets/entities_runtime-identifier.md.7d37e30a.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.8bb19bba.js",revision:null},{url:"assets/entities_sleeping-entities.md.8bb19bba.lean.js",revision:null},{url:"assets/entities_solid-entities.md.69baad4d.js",revision:null},{url:"assets/entities_solid-entities.md.69baad4d.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.f7eca8e0.js",revision:null},{url:"assets/entities_spawn-rules.md.f7eca8e0.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.78b103c9.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.78b103c9.lean.js",revision:null},{url:"assets/entities_timers.md.ba01b058.js",revision:null},{url:"assets/entities_timers.md.ba01b058.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.70be289b.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.70be289b.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.cbcd2f11.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.cbcd2f11.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.32978ce4.js",revision:null},{url:"assets/entities_village-mechanic.md.32978ce4.lean.js",revision:null},{url:"assets/entities_vuc-full.md.79365eaa.lean.js",revision:null},{url:"assets/entities_vusr-full.md.6837fadc.js",revision:null},{url:"assets/entities_vusr-full.md.6837fadc.lean.js",revision:null},{url:"assets/graph-test.md.a2e1f871.js",revision:null},{url:"assets/graph-test.md.a2e1f871.lean.js",revision:null},{url:"assets/guide_addons.md.a9884e0f.js",revision:null},{url:"assets/guide_addons.md.a9884e0f.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.cee2b10d.js",revision:null},{url:"assets/guide_advancedmanifest.md.cee2b10d.lean.js",revision:null},{url:"assets/guide_blockbench.md.03b32487.js",revision:null},{url:"assets/guide_blockbench.md.03b32487.lean.js",revision:null},{url:"assets/guide_custom-entity.md.ae1ff46b.js",revision:null},{url:"assets/guide_custom-entity.md.ae1ff46b.lean.js",revision:null},{url:"assets/guide_custom-item.md.c8bf2fc2.js",revision:null},{url:"assets/guide_custom-item.md.c8bf2fc2.lean.js",revision:null},{url:"assets/guide_download-packs.md.bd6b7810.js",revision:null},{url:"assets/guide_download-packs.md.bd6b7810.lean.js",revision:null},{url:"assets/guide_format-version.md.3deebc24.js",revision:null},{url:"assets/guide_format-version.md.3deebc24.lean.js",revision:null},{url:"assets/guide_index.md.6577a9de.js",revision:null},{url:"assets/guide_index.md.6577a9de.lean.js",revision:null},{url:"assets/guide_introduction.md.e46b2422.js",revision:null},{url:"assets/guide_introduction.md.e46b2422.lean.js",revision:null},{url:"assets/guide_loot-table.md.84482476.js",revision:null},{url:"assets/guide_loot-table.md.84482476.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.caba6f3a.js",revision:null},{url:"assets/guide_project-setup-android.md.caba6f3a.lean.js",revision:null},{url:"assets/guide_project-setup.md.6ef9b193.js",revision:null},{url:"assets/guide_project-setup.md.6ef9b193.lean.js",revision:null},{url:"assets/guide_software-preparation.md.835e2258.js",revision:null},{url:"assets/guide_software-preparation.md.835e2258.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.eba94b3e.js",revision:null},{url:"assets/guide_troubleshooting.md.eba94b3e.lean.js",revision:null},{url:"assets/guide_understanding-json.md.2bdf20dc.js",revision:null},{url:"assets/guide_understanding-json.md.2bdf20dc.lean.js",revision:null},{url:"assets/hacktoberfest.md.c5f8d54a.js",revision:null},{url:"assets/hacktoberfest.md.c5f8d54a.lean.js",revision:null},{url:"assets/index.md.1ad612a2.js",revision:null},{url:"assets/index.md.1ad612a2.lean.js",revision:null},{url:"assets/items_attachables.md.7de190f6.js",revision:null},{url:"assets/items_attachables.md.7de190f6.lean.js",revision:null},{url:"assets/items_custom-armor.md.e4da08a6.js",revision:null},{url:"assets/items_custom-armor.md.e4da08a6.lean.js",revision:null},{url:"assets/items_custom-weapon.md.88372fba.js",revision:null},{url:"assets/items_custom-weapon.md.88372fba.lean.js",revision:null},{url:"assets/items_enchantments.md.22124134.js",revision:null},{url:"assets/items_enchantments.md.22124134.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.742fdd9a.js",revision:null},{url:"assets/items_equipped-item-commands.md.742fdd9a.lean.js",revision:null},{url:"assets/items_index.md.bf2adca7.js",revision:null},{url:"assets/items_index.md.bf2adca7.lean.js",revision:null},{url:"assets/items_item-identifiers.md.39ea09f0.js",revision:null},{url:"assets/items_item-identifiers.md.39ea09f0.lean.js",revision:null},{url:"assets/items_items-16.md.36d9ad16.js",revision:null},{url:"assets/items_items-16.md.36d9ad16.lean.js",revision:null},{url:"assets/items_items-intro.md.8e4f7268.js",revision:null},{url:"assets/items_items-intro.md.8e4f7268.lean.js",revision:null},{url:"assets/items_spawning-items.md.33342c73.js",revision:null},{url:"assets/items_spawning-items.md.33342c73.lean.js",revision:null},{url:"assets/items_spear.md.7df1e567.js",revision:null},{url:"assets/items_spear.md.7df1e567.lean.js",revision:null},{url:"assets/items_throwable.md.d0b21e98.js",revision:null},{url:"assets/items_throwable.md.d0b21e98.lean.js",revision:null},{url:"assets/items_tool-durability.md.8ad1e995.js",revision:null},{url:"assets/items_tool-durability.md.8ad1e995.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.d9f081f2.js",revision:null},{url:"assets/items_troubleshooting-items.md.d9f081f2.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.2776e66e.js",revision:null},{url:"assets/items_vanilla-usage-items.md.2776e66e.lean.js",revision:null},{url:"assets/items_vui-full.md.e367d68e.js",revision:null},{url:"assets/items_vui-full.md.e367d68e.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.8dcb5c7e.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.8dcb5c7e.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.0e4c855b.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.0e4c855b.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.0d3ef1dc.js",revision:null},{url:"assets/json-ui_best-practices.md.0d3ef1dc.lean.js",revision:null},{url:"assets/json-ui_index.md.78051750.js",revision:null},{url:"assets/json-ui_index.md.78051750.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.5f59a0d2.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.5f59a0d2.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.b8d9274f.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.b8d9274f.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.70e3f5c8.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.70e3f5c8.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.73f69c7c.js",revision:null},{url:"assets/json-ui_string-to-number.md.73f69c7c.lean.js",revision:null},{url:"assets/loot_index.md.aeb6217e.js",revision:null},{url:"assets/loot_index.md.aeb6217e.lean.js",revision:null},{url:"assets/loot_item-functions.md.70c9c5fb.js",revision:null},{url:"assets/loot_item-functions.md.70c9c5fb.lean.js",revision:null},{url:"assets/loot_loot-tables.md.a412d877.js",revision:null},{url:"assets/loot_loot-tables.md.a412d877.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.90f6c5dc.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.90f6c5dc.lean.js",revision:null},{url:"assets/loot_recipes.md.e1cecc51.js",revision:null},{url:"assets/loot_recipes.md.e1cecc51.lean.js",revision:null},{url:"assets/loot_trade-tables.md.8b34f709.js",revision:null},{url:"assets/loot_trade-tables.md.8b34f709.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.7770e197.js",revision:null},{url:"assets/loot_trading-behavior.md.7770e197.lean.js",revision:null},{url:"assets/meta_addon-performance.md.0309b3ea.js",revision:null},{url:"assets/meta_addon-performance.md.0309b3ea.lean.js",revision:null},{url:"assets/meta_index.md.4a0ceebf.js",revision:null},{url:"assets/meta_index.md.4a0ceebf.lean.js",revision:null},{url:"assets/meta_jq.md.87597e70.js",revision:null},{url:"assets/meta_jq.md.87597e70.lean.js",revision:null},{url:"assets/meta_style-guide.md.40469e1c.js",revision:null},{url:"assets/meta_style-guide.md.40469e1c.lean.js",revision:null},{url:"assets/meta_useful-links.md.c7a9da39.js",revision:null},{url:"assets/meta_useful-links.md.c7a9da39.lean.js",revision:null},{url:"assets/meta_using-schemas.md.61d0c6fc.js",revision:null},{url:"assets/meta_using-schemas.md.61d0c6fc.lean.js",revision:null},{url:"assets/meta_version-control.md.a04364d3.js",revision:null},{url:"assets/meta_version-control.md.a04364d3.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.9da4ef39.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.9da4ef39.lean.js",revision:null},{url:"assets/nbt_index.md.8aa2e972.js",revision:null},{url:"assets/nbt_index.md.8aa2e972.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.ba870cf3.js",revision:null},{url:"assets/nbt_mcstructure.md.ba870cf3.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.73b97742.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.73b97742.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.a2ff0b69.js",revision:null},{url:"assets/nbt_step-by-step-example.md.a2ff0b69.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.8e3da36d.js",revision:null},{url:"assets/nbt_structure-limits.md.8e3da36d.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.c857ef8e.js",revision:null},{url:"assets/particles_disabling-particles.md.c857ef8e.lean.js",revision:null},{url:"assets/particles_index.md.e9ff7b37.js",revision:null},{url:"assets/particles_index.md.e9ff7b37.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.9342e85a.js",revision:null},{url:"assets/particles_particles-and-sounds.md.9342e85a.lean.js",revision:null},{url:"assets/particles_particles.md.e9f89ee3.js",revision:null},{url:"assets/particles_particles.md.e9f89ee3.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.2ec42bb2.js",revision:null},{url:"assets/particles_vanilla-particles.md.2ec42bb2.lean.js",revision:null},{url:"assets/privacy.md.67e7a3f9.js",revision:null},{url:"assets/privacy.md.67e7a3f9.lean.js",revision:null},{url:"assets/scripting_api-environment.md.2a1eb024.js",revision:null},{url:"assets/scripting_api-environment.md.2a1eb024.lean.js",revision:null},{url:"assets/scripting_custom-command.md.e3e573a0.js",revision:null},{url:"assets/scripting_custom-command.md.e3e573a0.lean.js",revision:null},{url:"assets/scripting_game-tests.md.c22a310d.js",revision:null},{url:"assets/scripting_game-tests.md.c22a310d.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.99df0e78.js",revision:null},{url:"assets/scripting_gametest-form.md.99df0e78.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.8d6d1a9a.js",revision:null},{url:"assets/scripting_gametest-qna.md.8d6d1a9a.lean.js",revision:null},{url:"assets/scripting_index.md.cb565b7b.js",revision:null},{url:"assets/scripting_index.md.cb565b7b.lean.js",revision:null},{url:"assets/scripting_resources.md.b33924ac.js",revision:null},{url:"assets/scripting_resources.md.b33924ac.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.e0bb297b.js",revision:null},{url:"assets/scripting_saving-loading.md.e0bb297b.lean.js",revision:null},{url:"assets/scripting_script-modules.md.034e12b7.js",revision:null},{url:"assets/scripting_script-modules.md.034e12b7.lean.js",revision:null},{url:"assets/scripting_script-net.md.e2766956.js",revision:null},{url:"assets/scripting_script-net.md.e2766956.lean.js",revision:null},{url:"assets/scripting_script-server.md.48efbd21.js",revision:null},{url:"assets/scripting_script-server.md.48efbd21.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.3b5d695b.js",revision:null},{url:"assets/scripting_script-watchdog.md.3b5d695b.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.d87c4dcc.js",revision:null},{url:"assets/scripting_scripting-intro.md.d87c4dcc.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.9a8a3d96.js",revision:null},{url:"assets/scripting_starting-scripts.md.9a8a3d96.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.843f9d85.js",revision:null},{url:"assets/scripting_troubleshooting.md.843f9d85.lean.js",revision:null},{url:"assets/scripting_typescript.md.47e674e7.js",revision:null},{url:"assets/scripting_typescript.md.47e674e7.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.43e7bc21.js",revision:null},{url:"assets/scripting_what-is-script.md.43e7bc21.lean.js",revision:null},{url:"assets/servers_index.md.6d0d73af.js",revision:null},{url:"assets/servers_index.md.6d0d73af.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.5354bbc0.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.5354bbc0.lean.js",revision:null},{url:"assets/servers_server-software.md.d1261021.js",revision:null},{url:"assets/servers_server-software.md.d1261021.lean.js",revision:null},{url:"assets/style.bd0bdede.css",revision:null},{url:"assets/test.md.1562a0e7.js",revision:null},{url:"assets/test.md.1562a0e7.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.53a71c08.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.53a71c08.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.b43a3490.js",revision:null},{url:"assets/visuals_animation-effects.md.b43a3490.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.ac157e47.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.ac157e47.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.7dfbf0c6.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.7dfbf0c6.lean.js",revision:null},{url:"assets/visuals_death-animations.md.b16bdff9.js",revision:null},{url:"assets/visuals_death-animations.md.b16bdff9.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.a7d8ec2b.js",revision:null},{url:"assets/visuals_glowing-texture.md.a7d8ec2b.lean.js",revision:null},{url:"assets/visuals_index.md.1f58cea3.js",revision:null},{url:"assets/visuals_index.md.1f58cea3.lean.js",revision:null},{url:"assets/visuals_introduction.md.84844f54.js",revision:null},{url:"assets/visuals_introduction.md.84844f54.lean.js",revision:null},{url:"assets/visuals_leash-position.md.09b81185.js",revision:null},{url:"assets/visuals_leash-position.md.09b81185.lean.js",revision:null},{url:"assets/visuals_material-creations.md.8cc0acd3.js",revision:null},{url:"assets/visuals_material-creations.md.8cc0acd3.lean.js",revision:null},{url:"assets/visuals_materials.md.12f80ac8.js",revision:null},{url:"assets/visuals_materials.md.12f80ac8.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.aa0a2317.js",revision:null},{url:"assets/visuals_math-based-animations.md.aa0a2317.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.32f4c077.js",revision:null},{url:"assets/visuals_player-geometry.md.32f4c077.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.3beb075a.js",revision:null},{url:"assets/visuals_remove-shadows.md.3beb075a.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.f5c6d0bb.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.f5c6d0bb.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.d8196474.js",revision:null},{url:"assets/visuals_structure-presentation.md.d8196474.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.59a14bea.js",revision:null},{url:"assets/vr_editing-your-first-model.md.59a14bea.lean.js",revision:null},{url:"assets/vr_index.md.a14001b7.js",revision:null},{url:"assets/vr_index.md.a14001b7.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.ac933caa.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.ac933caa.lean.js",revision:null},{url:"assets/vr_pack_setup.md.b9292fe6.js",revision:null},{url:"assets/vr_pack_setup.md.b9292fe6.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.f992a7a8.js",revision:null},{url:"assets/world-generation_biome-tags.md.f992a7a8.lean.js",revision:null},{url:"assets/world-generation_biomes.md.ca85e3eb.js",revision:null},{url:"assets/world-generation_biomes.md.ca85e3eb.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.0013f5e0.js",revision:null},{url:"assets/world-generation_custom-ores.md.0013f5e0.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.d7aec937.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.d7aec937.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.199b1aa2.js",revision:null},{url:"assets/world-generation_feature-types.md.199b1aa2.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.aee8248b.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.aee8248b.lean.js",revision:null},{url:"assets/world-generation_index.md.db3108e7.js",revision:null},{url:"assets/world-generation_index.md.db3108e7.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.df67019f.js",revision:null},{url:"assets/world-generation_structure-features.md.df67019f.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.70f84281.js",revision:null},{url:"assets/world-generation_surface-builder.md.70f84281.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.25110119.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.25110119.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
