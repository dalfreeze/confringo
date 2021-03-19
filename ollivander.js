    let narrative = document.getElementById("narrative");
    identify = document.getElementById("identify");
    selectors = document.getElementById("selectors");

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function reset() {
        $(".wandMaker").each(function () { this.selectedIndex = 0 });
        for (i = 0; i < narrative.children.length; i++) {
            narrative.children[i].textContent = '';
            identify.children[i].textContent = '';
            identify.children[i].style.opacity = 0;
            narrative.children[i].style.opacity = 0;
        };
    };

    document.getElementById("random").addEventListener("click", function () {
        reset();
        let indices = [];
        $(".wandMaker").each(function () {
            this.selectedIndex = getRandomArbitrary(1, this.options.length);
            indices.push(this.selectedIndex);
        });

        for (i = 0; i < identify.children.length; i++) {
            identify.children[i].textContent = (selectors.children[i].options[indices[i]].text);
            identify.children[i].style.opacity = 1;
            narrative.children[i].style.opacity = 1;
        };

        for (i = 0; i < narrative.children.length; i++) {
            narrative.children[i].textContent = selectors.children[i].options[indices[i]].value;
        }
    });

    document.getElementById("reset").addEventListener("click", reset);

    document.querySelectorAll("select").addEventListener("change", function() {
        for (i=0; i<selectors.children.length; i++) {
            console.log(selectors.children[i]);
        }
    });

//     for (i=0; i<selectors.children.length; i++) {
//         selectors.children[i].addEventListener("select", function() {
//             narrative.children[i].textContent = '';
//             identify.children[i].textContent = '';
//             console.log(this.value);
//             console.log(this.text);
//             answerValue = this.value;
//             answerText = this.text;
//             narrative.children[i].append(answerValue);
//             identify.children[i].append(answerText);

//         });
//     };
