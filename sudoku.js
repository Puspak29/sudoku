var numSelected = null;
var tileSelected = null;

var errors = 0;



var boardSolutionMap=[
    {
        board:[
            "--74916-5",
            "2---6-3-9",
            "-----7-1-",
            "-586----4",
            "--3----9-",
            "--62--187",
            "9-4-7---2",
            "67-83----",
            "81--45---"
        ],
        solution:[
            "387491625",
            "241568379",
            "569327418",
            "758619234",
            "123784596",
            "496253187",
            "934176852",
            "675832941",
            "812945763"
        ],
    },
    {
        board:[
            "8-6-1----",
            "--3-64-9-",
            "9-----816",
            "-8-396---",
            "7-2-4-3-9",
            "---572-8-",
            "521-----4",
            "-3-75-2--",
            "----2-1-5",
        ],
        solution:[
            "856917423",
            "213864597",
            "947235816",
            "185396724",
            "762148359",
            "394572681",
            "521683974",
            "439751268",
            "678429135",
        ],
    },
    {
        board:[
            "2-5---7--",
            "45---9---",
            "-2-6-81--",
            "--9---856",
            "7-------2",
            "418---2--",
            "--43-7-1-",
            "---1---85",
            "--6---7-8"
    ],
        solution:[
            "215986734",
            "452869371",
            "527648193",
            "379124856",
            "781543692",
            "418937265",
            "864357219",
            "693172485",
            "936521748"
        ],
    },
    {
        board:[
            "----35-86",
            "-1-9-7---",
            "--269----",
            "54-------",
            "-----527-",
            "9--75----",
            "7-6---3--",
            "---2-----",
            "56---2-14"
        ],
        solution:[
            "129735486",
            "213967854",
            "342691578",
            "543869127",
            "498315276",
            "981754632",
            "786421359",
            "675248193",
            "567832914"
        ],
    },
    {
        board:[
            "3-549-6--",
            "--396--81",
            "-5-2--149",
            "4-276-1-3",
            "9---583-4",
            "6-1549--7",
            "-6-1-8245",
            "58-7-3-92",
            "4---7-3-6"
        ],
        solution:[
            "315492678",
            "723964581",
            "857236149",
            "482765193",
            "916258374",
            "631549827",
            "967138245",
            "584713692",
            "429871356"
        ],
    },
    {
        board:[
            "47----3--",
            "-----179-",
            "-4-93--5-",
            "---6---7-",
            "48-------",
            "--2716-34",
            "-9----6--",
            "--6--2381",
            "---54--1-"
        ],
        solution:[
            "476285319",
            "523861794",
            "148932657",
            "123649578",
            "481397265",
            "952716834",
            "895137624",
            "976452381",
            "763548219"
        ],
    },
    {
        board:[
            "-2--18573",
            "-31--5-96",
            "---16----",
            "5--4-26--",
            "97--86---",
            "-----98--",
            "1-6--79--",
            "2-5---814",
            "4-9-7---1"
        ],
        solution:[
            "429618573",
            "831245796",
            "382164957",
            "537492618",
            "974186325",
            "761259843",
            "186537942",
            "265793814",
            "459378621"
        ],
    },
]

let num= Math.floor(Math.random() * 6)


window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (boardSolutionMap[num].board[r][c] != "-") {
                tile.innerText = boardSolutionMap[num].board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (boardSolutionMap[num].solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}
