function submitForm() {
    // Get values from the form
    var personalBackground = document.getElementById('personalBackground').value;
    var professionalBackground = document.getElementById('professionalBackground').value;
    var academicBackground = document.getElementById('academicBackground').value;
    var subjectBackground = document.getElementById('subjectBackground').value;
    var computerPlatform = document.getElementById('computerPlatform').value;
    var coursesAndWhy = document.getElementById('coursesAndWhy').value;
    var interestingFact = document.getElementById('interestingFact').value;
    var alsoShare = document.getElementById('alsoShare').value;

     // Favorite color
    var favoriteColorOptions = document.getElementsByName('favoriteColor');
    var selectedFavoriteColor;
    for (var i = 0; i < favoriteColorOptions.length; i++) {
        if (favoriteColorOptions[i].checked) {
            selectedFavoriteColor = favoriteColorOptions[i].value;
            break;
        }
    }

    // Favorite animals
    var selectedFavoriteAnimals = [];
    var favoriteAnimalOptions = document.getElementsByName('favoriteAnimal');
    for (var i = 0; i < favoriteAnimalOptions.length; i++) {
        if (favoriteAnimalOptions[i].checked) {
            selectedFavoriteAnimals.push(favoriteAnimalOptions[i].value);
        }
    }

    // Display:
    document.getElementById('introOutput').innerHTML = `
        <h2>INTRODUCTION</h2>
        <p class="outputText"><strong>Personal background:</strong> ${personalBackground}</p>
        <p class="outputText"><strong>Professional background:</strong> ${professionalBackground}</p>
        <p class="outputText"><strong>Academic background:</strong> ${academicBackground}</p>
        <p class="outputText"><strong>Background in this subject:</strong> ${subjectBackground}</p>
        <p class="outputText"><strong>Primary Computer Platform:</strong> ${computerPlatform}</p>
        <p class="outputText"><strong>Courses I'm Taking & Why:</strong> ${coursesAndWhy}</p>
        <p class="outputText"><strong>Funny/Interesting Item about Yourself:</strong> ${interestingFact}</p>
        <p class="outputText"><strong>I'd also like to Share:</strong> ${alsoShare}</p>
        <p class="outputText"><strong>My favorite color:</strong> ${selectedFavoriteColor}</p>
        <p class="outputText"><strong>My favorite animals:</strong> ${selectedFavoriteAnimals.join(', ')}</p>
    `;
};