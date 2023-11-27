var numSelected = null;
var tileSelected = null;

var errors = 0;



var boardSolutionMap=[
    {   //0
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
    {   //1
        board:[
            "---26-7-1",
            "68--7--9-",
            "19---45--",
            "82-1---4-",
            "--46-29--",
            "-5---3-28",
            "--93---74",
            "-4--5--36",
            "7-3-18---"
        ],
        solution:[
            "435269781",
            "682571493",
            "197834562",
            "826195347",
            "374682915",
            "951743628",
            "519326874", 
            "248957136",
            "763418259"
        ],
    },
    {   //2
        board:[
            "1--489--6",
            "73-----4-",
            "-----1295",
            "--712-6--",
            "5--7-3--8",
            "--6-957--",
            "9146-----",
            "-2-----37",
            "8--512--4"
    ],
        solution:[
            "152489376",
            "739256841",
            "468371295",
            "387124659",
            "591763428",
            "246895713",
            "914637582",
            "625948137",
            "873512964"
        ],
    },
    {   //3
        board:[
            "-2-6-8---",
            "58---97--",
            "----4----",
            "37----5--",
            "6-------4",
            "--8----13",
            "----2----",
            "--98---36",
            "---3-6-9-"
        ],
        solution:[
            "123678945",
            "584239761",
            "967145328",
            "372461589",
            "691583274",
            "458792613",
            "836924157",
            "219857436",
            "745316892"
        ],
    },
    // {
    //     board:[
    //         "3-549-6--",
    //         "--396--81",
    //         "-5-2--149",
    //         "4-276-1-3",
    //         "9---583-4",
    //         "6-1549--7",
    //         "-6-1-8245",
    //         "58-7-3-92",
    //         "4---7-3-6"
    //     ],
    //     solution:[
    //         "315492678",
    //         "723964581",
    //         "857236149",
    //         "482765193",
    //         "916258374",
    //         "631549827",
    //         "967138245",
    //         "584713692",
    //         "429871356"
    //     ],
    // },
    {   //4
        board:[
            "---6--4--",
            "7----36--",
            "----91-8-",
            "---------",
            "-5-18---3",
            "---3-6-45",
            "-4-2---6-",
            "9-3------",
            "-2----1--"
        ],
        solution:[
            "581672439",
            "792843651", 
            "364591782",
            "438957216",
            "256184973",
            "179326845",
            "845219367",
            "913768524",
            "627435198"
        ],
    },
    {   //5
        board:[
            "2--3-----",
            "8-4-62--3",
            "-138--2--",
            "----2-39-",
            "5-7---621",
            "-32--6---",
            "-2---914-",
            "6-125-8-9",
            "-----1--2"
        ],
        solution:[
            "276314958",
            "854962713",
            "913875264",
            "468127395",
            "597438621",
            "132596487",
            "325789146",
            "641253879",
            "789641532"
        ],
    },
]

let num= Math.floor(Math.random() * 5)


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
