<template>
<div>

    <!-- This div will be used as the root for the library. It must be **perfectly** empty to prevent a FOUC. -->
    <div id="bracketsViewerExample" class="brackets-viewer"></div>

    <div id="createNewBracket"></div>



    <div id="input-mask">
        <div>
            <h3></h3>
            <label id="opponent1-label" for="opponent1">Opponent 1: </label><input type="number" id="opponent1"><br>
            <label id="opponent2-label" for="opponent2">Opponent 2: </label><input type="number" id="opponent2"><br>
            <p>Who won?</p>
            <input type="radio" id="won-opponent1" value="opponent1" name="won" checked><label
                for="won-opponent1">Opponent1</label><br>
            <input type="radio" id="won-opponent2" value="opponent2" name="won"><label
                for="won-opponent2">Opponent2</label><br>
            <input type="radio" id="won-draw" value="draw" name="won"><label for="won-draw">Draw</label><br><br>
            <button id="input-submit">Submit</button>
        </div>
    </div>

</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
require('../dist/brackets-viewer-min.js')

export default {
  data () {

  },
  mounted() {
      console.log("test");
          console.log("test");

  },
  setup () {
    onMounted(() => {
      console.log('test')
    })
  },
  beforeCreate() {
    console.log("test");
  },
  created() {
    console.log("test");
  },
}

const config = {
            parent_id: 'createNewBracket',
            html_name_id: 'name',
            html_stage_type_selector_id: 'selector',
            html_team_input_id: 'teams',
            html_group_id: 'groups',
            html_seed_order_id: 'seeds',
            html_round_robin_mode_id: 'round-robin-mode',
            html_consolation_final_checkbox_id: 'consolation_final',
            html_skip_first_round_checkbox_id: 'skip_first',
            html_grand_final_type_id: 'grand_final',
            html_double_elimination_seed_textarea_id: 'double_elimination_seeds',

            group_default_size: 1
        }

        window.stageFormCreator(config, function (config) {
            (async function () {
                await window.bracketsManager.create(config)
                    .then(() => {
                        const rawStoredBrackets = localStorage.getItem(BRACKETS);

                        if (null === rawStoredBrackets || '' === rawStoredBrackets) {
                            localStorage.setItem(BRACKETS, JSON.stringify({
                                0: window.inMemoryDatabase.data,
                            }));

                            window.location.href = '?id=0';
                        }

                        let storedBrackets = JSON.parse(rawStoredBrackets);
                        console.log(storedBrackets);

                        let index = Object.keys(storedBrackets).length;
                        storedBrackets[index] = window.inMemoryDatabase.data;

                        localStorage.setItem(BRACKETS, JSON.stringify(storedBrackets));

                        window.location.href = '?id=' + index;
                    });
            })();
        });

        const BRACKETS = 'brackets';
        const INPUT_MASK = 'input-mask';
        const INPUT_SUBMIT = 'input-submit';
        const OPPONENT1 = 'opponent1';
        const OPPONENT2 = 'opponent2';
        const RADIO_OPPONENT1 = 'won-opponent1';
        const RADIO_OPPONENT2 = 'won-opponent2';
        const RADIO_DRAW = 'won-draw';
        const ELEMENT_ID = 'bracketsViewerExample';
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        function listBrackets() {
            const storageData = JSON.parse(localStorage.getItem(BRACKETS)) || {};
            const bracketsList = document.createElement('ul');

            for (const [key] of Object.entries(storageData)) {
                const bracketItem = document.createElement('li');
                const bracketLink = document.createElement('a');
                bracketLink.href = '?id=' + key;
                bracketLink.innerText = 'Go to ID: ' + key;

                bracketItem.appendChild(bracketLink);
                bracketsList.appendChild(bracketItem);
            }

            document.body.insertBefore(bracketsList, document.getElementById(ELEMENT_ID));
        }

        function loadData(id) {
            const bracketsStore = JSON.parse(localStorage.getItem(BRACKETS));

            if (null === bracketsStore || !(id in bracketsStore)) {
                alert('Key is not found in data!');
                window.location.search = '?id'
                return;
            }

            return bracketsStore[id];
        }

        function renderBracket(data) {
            document.getElementById(ELEMENT_ID).innerHTML = '';

            window.bracketsViewer.render({
                stages: data.stage,
                matches: data.match,
                matchGames: data.match_game,
                participants: data.participant,
            }, {
                selector: '#' + ELEMENT_ID,
                participantOriginPlacement: 'before',
                separatedChildCountLabel: true,
                showSlotsOrigin: true,
                showLowerBracketSlotsOrigin: true,
                highlightParticipantOnHover: true,
            });
        }

        if (id === null || id === '') {
            listBrackets();
        } else {
            const backLink = document.createElement('a');
            backLink.href = '?id';
            backLink.innerText = 'Go back';
            document.body.insertBefore(backLink, document.getElementById(ELEMENT_ID));

            const deleteButton = document.createElement('a');
            deleteButton.href = '?id';
            deleteButton.innerText = 'Delete';
            document.body.insertBefore(deleteButton, document.getElementById(ELEMENT_ID));

            deleteButton.addEventListener('click', async () => {
                const bracketsStore = JSON.parse(localStorage.getItem(BRACKETS));
                delete bracketsStore[id];
                localStorage.setItem(BRACKETS, JSON.stringify(bracketsStore));
            });

            window.bracketsViewer.onMatchClicked = async (match) => {
                const inputMask = document.getElementById(INPUT_MASK);
                inputMask.style.display = 'flex';

                const matchTitle = document.querySelector(`[data-match-id="${match.id}"] .opponents > span`).textContent;
                inputMask.querySelector('h3').innerText = matchTitle;

                const inputButton = document.getElementById(INPUT_SUBMIT);
                inputButton.onclick = async () => {
                    const opponent1 = parseInt(document.getElementById(OPPONENT1).value);
                    const opponent2 = parseInt(document.getElementById(OPPONENT2).value);

                    const payload1 = { score: opponent1 }
                    const payload2 = { score: opponent2 }

                    if (document.getElementById(RADIO_OPPONENT1).checked) {
                        payload1['result'] = 'win';
                    }

                    if (document.getElementById(RADIO_OPPONENT2).checked) {
                        payload2['result'] = 'win';
                    }

                    if (document.getElementById(RADIO_DRAW).checked) {
                        payload1['result'] = 'draw';
                        payload2['result'] = 'draw';
                    }

                    const data = loadData(id);
                    await window.bracketsManager.import(data);

                    await window.bracketsManager.update.match({
                        id: match.id,
                        opponent1: payload1,
                        opponent2: payload2,
                    });

                    const newData = await window.bracketsManager.export();
                    renderBracket(newData);

                    const bracketsStore = JSON.parse(localStorage.getItem(BRACKETS));
                    bracketsStore[id] = newData;
                    localStorage.setItem(BRACKETS, JSON.stringify(bracketsStore));

                    inputMask.style.display = 'none';
                }
            }

            const data = loadData(id);
            renderBracket(data);
        }
</script>
<style>
#input-mask div {
            background: lightgrey;
            padding: 10px 0;
        }
.brackets-viewer{--primary-background: #fff;--secondary-background: #eceff1;--match-background: var(--primary-background);--font-color: #212529;--win-color: #50b649;--loss-color: #e61a1a;--label-color: grey;--hint-color: #a7a7a7;--connector-color: #9e9e9e;--border-color: #d9d9d9;--border-hover-color: #b6b5b5;--text-size: 12px;--round-margin: 40px;--match-width: 150px;--match-horizontal-padding: 8px;--match-vertical-padding: 6px;--connector-border-width: 2px;--match-border-width: 1px;--match-border-radius: 0.3em;--participant-image-size: 1em}.brackets-viewer{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";background:var(--primary-background);color:var(--font-color);font-size:var(--text-size);text-align:left;display:flex;flex-direction:column;align-items:flex-start;overflow:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 auto;padding:10px 50px}.brackets-viewer:empty{display:none}.brackets-viewer *,.brackets-viewer ::after,.brackets-viewer ::before{box-sizing:border-box}.brackets-viewer h1,.brackets-viewer h2,.brackets-viewer h3{margin-bottom:.5em;font-weight:500;line-height:1.2}.brackets-viewer h1{font-size:2em;margin-top:30px;margin-bottom:20px}.brackets-viewer h2{font-size:1.7em}.brackets-viewer h3{text-align:center;background:var(--secondary-background);font-size:1.1em;padding:10px 0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:var(--match-width)}.brackets-viewer .round-robin{display:flex;flex-wrap:wrap;justify-content:center;row-gap:24px}.brackets-viewer .round-robin h1{flex-basis:100%}.brackets-viewer .round-robin h2{text-align:center}.brackets-viewer .round-robin .group:not(:last-of-type){margin-right:var(--round-margin)}.brackets-viewer .round-robin .group h2{margin:0 0 25px 0}.brackets-viewer .round-robin .group table{font-size:1em;margin:30px 0 20px 0;color:#a7a7a7;border-collapse:collapse}.brackets-viewer .round-robin .group th{font-weight:normal;text-align:start;cursor:help;border-bottom:var(--match-border-width) solid var(--border-color)}.brackets-viewer .round-robin .group td.hover{background:var(--secondary-background)}.brackets-viewer .round-robin .group th,.brackets-viewer .round-robin .group td{padding:5px}.brackets-viewer .round-robin .group td:nth-of-type(2),.brackets-viewer .round-robin .group td:last-of-type{color:var(--font-color);font-weight:500}.brackets-viewer .round-robin .round{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.brackets-viewer .bracket h2{font-size:1.5em;color:gray}.brackets-viewer .bracket .rounds{display:flex}.brackets-viewer .bracket .rounds:not(:last-of-type){margin-bottom:15px}.brackets-viewer .bracket .rounds .round{display:flex;flex-direction:column}.brackets-viewer .bracket .rounds .round:not(:last-of-type){margin-right:var(--round-margin)}.brackets-viewer .match{flex:1;display:flex;align-items:center;margin:10px 0;width:var(--match-width);position:relative}.brackets-viewer .match.connect-next::after{content:"";display:block;position:absolute;right:calc(-1 * var(--round-margin)/2);width:calc(var(--round-margin)/2);height:50%;border-right:var(--connector-border-width) solid var(--connector-color)}.brackets-viewer .match.connect-next:nth-of-type(odd)::after{top:50%;border-top:var(--connector-border-width) solid var(--connector-color)}.brackets-viewer .match.connect-next:nth-of-type(even)::after{top:0;border-bottom:var(--connector-border-width) solid var(--connector-color)}.brackets-viewer .match.connect-next.straight::after{width:var(--round-margin);right:calc(-1*var(--round-margin));top:0;border-bottom:var(--connector-border-width) solid var(--connector-color);border-top:unset;border-right:unset}.brackets-viewer .opponents{width:100%;position:relative;border:var(--match-border-width) solid var(--border-color);border-radius:var(--match-border-radius);background:var(--match-background)}.brackets-viewer .opponents:hover{border:1px solid var(--border-hover-color)}.brackets-viewer .opponents>span{position:absolute;top:-10px;font-size:.8em;padding:0 5px;color:var(--label-color);background:var(--primary-background);border-radius:3px}.brackets-viewer .opponents>span:nth-of-type(1){left:3px}.brackets-viewer .opponents>span:nth-of-type(2){right:3px}.brackets-viewer .opponents.connect-previous::before{content:"";display:block;position:absolute;left:calc(-1 * var(--round-margin)/2);width:calc(var(--round-margin)/2);height:50%;border-bottom:var(--connector-border-width) solid var(--connector-color)}.bracket:nth-of-type(2) .brackets-viewer .opponents.connect-previous .opponents.connect-previous.straight::before,.bracket:nth-of-type(1) .brackets-viewer .opponents.connect-previous .opponents.connect-previous.straight::after{border-left:unset;left:var(--round-margin);width:var(--round-margin)}.bracket:nth-of-type(1) .brackets-viewer .opponents.connect-previous.straight::before{content:unset}.bracket:nth-of-type(2) .brackets-viewer .opponents.connect-previous.straight::after{content:unset}.brackets-viewer .participant{display:flex;justify-content:space-between;padding:2px var(--match-horizontal-padding);background:var(--match-background)}.brackets-viewer .participant.hover{background:var(--secondary-background) !important}.brackets-viewer .participant:nth-of-type(1){border-bottom:none;border-top-left-radius:var(--match-border-radius);border-top-right-radius:var(--match-border-radius);padding-top:var(--match-vertical-padding)}.brackets-viewer .participant:nth-of-type(2){border-top:none;border-bottom-left-radius:var(--match-border-radius);border-bottom-right-radius:var(--match-border-radius);padding-bottom:var(--match-vertical-padding)}.brackets-viewer .participant .name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:80%}.brackets-viewer .participant .name.hint{color:var(--hint-color)}.brackets-viewer .participant .name>img{width:var(--participant-image-size);height:var(--participant-image-size);margin-right:4px;-o-object-fit:cover;object-fit:cover;border-radius:4px;vertical-align:middle;position:relative;bottom:1px}.brackets-viewer .participant .name>span{color:var(--hint-color);font-size:.9em;font-weight:initial}.brackets-viewer .participant.win .name{font-weight:bold}.brackets-viewer .participant .result{margin-left:10px;width:15%;text-align:center}.brackets-viewer .participant.win .result{color:var(--win-color)}.brackets-viewer .participant.loss .result{color:var(--loss-color)}#input-mask{position:absolute;left:50%;margin-left:-150px;width:300px;height:190px;top:50%;margin-top:-95px;background:#9e9e9e;box-shadow:#14191f;border-radius:5px;z-index:1;display:none;justify-content:center;align-items:center}#input-mask>div{text-align:center}#createNewBracket>div{display:grid;grid-template-columns:1fr 2fr;margin:5px;align-items:center;justify-content:center}#createNewBracket>div:last-child{grid-template-columns:1fr}
.brackets-viewer {
  /* Colors */
  --primary-background: #fff;
  --secondary-background: #eceff1;
  --match-background: var(--primary-background);
  --font-color: #212529;
  --win-color: #50b649;
  --loss-color: #e61a1a;
  --label-color: grey;
  --hint-color: #a7a7a7;
  --connector-color: #9e9e9e;
  --border-color: #d9d9d9;
  --border-hover-color: #b6b5b5;

  /* Sizes */
  --text-size: 12px;
  --round-margin: 40px;
  --match-width: 150px;
  --match-horizontal-padding: 8px;
  --match-vertical-padding: 6px;
  --connector-border-width: 2px;
  --match-border-width: 1px;
  --match-border-radius: 0.3em;
}
</style>