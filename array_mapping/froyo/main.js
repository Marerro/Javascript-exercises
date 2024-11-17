const askforFlavor = prompt("Season's greetings! What flavors of froyo would you like to enjoy today? Simply type them in, separated by commas, and let us whip up a winter wonderland of flavors just for you!🎄");

function countFlavors(input) {
    const flavorCounts = {};
    input
    .split(',')
    .forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });
    for (const flavor in flavorCounts) {
        console.log(`${flavor.charAt(0).toUpperCase() + flavor.slice(1)}: ${flavorCounts[flavor]} servings`);
        }    
};

countFlavors(askforFlavor);

