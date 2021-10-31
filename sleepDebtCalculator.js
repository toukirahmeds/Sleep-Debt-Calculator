const DaysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const getSleepHours = day => {
    switch (day.toLowerCase()) {
        case "sunday":
            return 6;
        case "monday":
            return 8;
        case "tuesday":
            return 9;
        case "wednesday":
            return 5;
        case "thursday":
            return 9;
        case "friday":
            return 6;
        case "saturday":
            return 5;
        default:
            break;
    }
};

const getActualSleepHours = () => DaysOfWeek.reduce((acc, elem) => acc + getSleepHours(elem), 0);

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log("User got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("User got " + (actualSleepHours - idealSleepHours) + " more hours sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("User should get some rest. User slept " + (idealSleepHours - actualSleepHours) + " hours less than needed.");
    }
};

calculateSleepDebt();
