import React from "react/addons";
import Constants from "../../constants/constants.js";
jest.dontMock("../DateTimePickerHours.js");
const { TestUtils } = React.addons;

describe("DateTimePickerHours", function() {
  const DateTimePickerHours = require("../DateTimePickerHours.js");
  let hours, onSwitchMock, setSelectedHourByEventMock;


  describe("Controls", function() {

    beforeEach(() => {
      setSelectedHourByEventMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
      hours = TestUtils.renderIntoDocument(
        <DateTimePickerHours
          mode={Constants.MODE_TIME}
          onSwitch={onSwitchMock}
          setSelectedHourByEvent={setSelectedHourByEventMock}
         />
      );
    });

    it("calls setSelectedHourByEvent when clicking a hour", function() {
      const hour = TestUtils.scryRenderedDOMComponentsWithClass(hours, "hour")[0];
      TestUtils.Simulate.click(hour);
      expect(setSelectedHourByEventMock.mock.calls.length).toBe(1);
     });

    it("calls onSwitch when clicking the switch", function() {
      const switchIcon = TestUtils.findRenderedDOMComponentWithClass(hours, "picker-switch");
      TestUtils.Simulate.click(switchIcon);
      expect(onSwitchMock.mock.calls.length).toBe(1);
     });
  });

  describe("UI", function() {
    beforeEach(() => {
      setSelectedHourByEventMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
    });

    it("renders the switch if mode is time", function() {
      hours = TestUtils.renderIntoDocument(
        <DateTimePickerHours
          mode={Constants.MODE_TIME}
          onSwitch={onSwitchMock}
          setSelectedHourByEvent={setSelectedHourByEventMock}
         />
      );
      const switchList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "list-unstyled");
      expect(switchList.length).toBe(1);
    });

    it("does not render the switch if mode is date", function() {
      hours = TestUtils.renderIntoDocument(
        <DateTimePickerHours
          mode={Constants.MODE_DATE}
          onSwitch={onSwitchMock}
          setSelectedHourByEvent={setSelectedHourByEventMock}
         />
      );
      const switchList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "list-unstyled");
      expect(switchList.length).toBe(0);
    });

    it("renders 24 Hours", function() {
      hours = TestUtils.renderIntoDocument(
        <DateTimePickerHours
          mode={Constants.MODE_DATE}
          onSwitch={onSwitchMock}
          setSelectedHourByEvent={setSelectedHourByEventMock}
         />
      );
      const hourList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "hour");
      expect(hourList.length).toBe(24);
    });

    it("renders 01 to 24", function() {
      hours = TestUtils.renderIntoDocument(
        <DateTimePickerHours
          mode={Constants.MODE_DATE}
          onSwitch={onSwitchMock}
          setSelectedHourByEvent={setSelectedHourByEventMock}
         />
      );
      const hourList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "hour");
      expect(hourList.map((x) => x.props.children)).toEqual(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]);
    });

  });

});
