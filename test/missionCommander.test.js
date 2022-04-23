const MissionCommander = require('./../app/missionCommander.js');

describe("Unit Tests for Mission Commander Class", () => {
    test('Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa")

        expect(myMissionCommander.name).toBe("Woopa");
    });
})