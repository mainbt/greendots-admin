(function (React, designSystem) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const MyCustomAction = props => {
      const {
        record
      } = props;
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        flex: true
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "white",
        width: 1 / 2,
        boxShadow: "card",
        mr: "xxl",
        flexShrink: 0
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H3, null, "Example of a simple page"), /*#__PURE__*/React__default.default.createElement("p", null, "Where you can put almost everything"), /*#__PURE__*/React__default.default.createElement("p", null, "like this:"), /*#__PURE__*/React__default.default.createElement("p", null, /*#__PURE__*/React__default.default.createElement("img", {
        src: "https://i.redd.it/rd39yuiy9ns21.jpg",
        alt: "stupid cat",
        width: 300
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement("p", null, "Or (more likely), operate on a returned record:"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        overflowX: "auto"
      }, JSON.stringify(record))));
    };

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.MyCustomAction = MyCustomAction;

})(React, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2NvbXBvbmVudHMvbXktY3VzdG9tLWFjdGlvbi5qcyIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIMyB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3QgTXlDdXN0b21BY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBmbGV4OiB0cnVlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwid2hpdGVcIiwgd2lkdGg6IDEgLyAyLCBib3hTaGFkb3c6IFwiY2FyZFwiLCBtcjogXCJ4eGxcIiwgZmxleFNocmluazogMCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMywgbnVsbCwgXCJFeGFtcGxlIG9mIGEgc2ltcGxlIHBhZ2VcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIldoZXJlIHlvdSBjYW4gcHV0IGFsbW9zdCBldmVyeXRoaW5nXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJsaWtlIHRoaXM6XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImh0dHBzOi8vaS5yZWRkLml0L3JkMzl5dWl5OW5zMjEuanBnXCIsIGFsdDogXCJzdHVwaWQgY2F0XCIsIHdpZHRoOiAzMDAgfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIk9yIChtb3JlIGxpa2VseSksIG9wZXJhdGUgb24gYSByZXR1cm5lZCByZWNvcmQ6XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgb3ZlcmZsb3dYOiBcImF1dG9cIiB9LCBKU09OLnN0cmluZ2lmeShyZWNvcmQpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNeUN1c3RvbUFjdGlvbjtcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IE15Q3VzdG9tQWN0aW9uIGZyb20gJy4uL2Rpc3QvY29tcG9uZW50cy9teS1jdXN0b20tYWN0aW9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5NeUN1c3RvbUFjdGlvbiA9IE15Q3VzdG9tQWN0aW9uIl0sIm5hbWVzIjpbIk15Q3VzdG9tQWN0aW9uIiwicHJvcHMiLCJyZWNvcmQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJmbGV4IiwidmFyaWFudCIsIndpZHRoIiwiYm94U2hhZG93IiwibXIiLCJmbGV4U2hyaW5rIiwiSDMiLCJzcmMiLCJhbHQiLCJvdmVyZmxvd1giLCJKU09OIiwic3RyaW5naWZ5IiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRUEsTUFBTUEsY0FBYyxHQUFJQyxLQUFLLElBQUs7TUFDOUIsTUFBTTtJQUFFQyxJQUFBQSxNQUFBQTtJQUFPLEdBQUMsR0FBR0QsS0FBSyxDQUFBO0lBQ3hCLEVBQUEsb0JBQVFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0MsZ0JBQUcsRUFBRTtJQUFFQyxJQUFBQSxJQUFJLEVBQUUsSUFBQTtJQUFLLEdBQUMsZUFDM0NILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0MsZ0JBQUcsRUFBRTtJQUFFRSxJQUFBQSxPQUFPLEVBQUUsT0FBTztRQUFFQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFBRUMsSUFBQUEsU0FBUyxFQUFFLE1BQU07SUFBRUMsSUFBQUEsRUFBRSxFQUFFLEtBQUs7SUFBRUMsSUFBQUEsVUFBVSxFQUFFLENBQUE7T0FBRyxlQUNwR1Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDUSxlQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixDQUFDLGVBQ3pEVCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxxQ0FBcUMsQ0FBQyxlQUNyRUQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLGVBQzVDRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksZUFDekJELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRVMsSUFBQUEsR0FBRyxFQUFFLHFDQUFxQztJQUFFQyxJQUFBQSxHQUFHLEVBQUUsWUFBWTtJQUFFTixJQUFBQSxLQUFLLEVBQUUsR0FBQTtJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUMsZUFDbkhMLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0MsZ0JBQUcsRUFBRSxJQUFJLGVBQ3pCRixzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxpREFBaUQsQ0FBQyxlQUNqRkQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDQyxnQkFBRyxFQUFFO0lBQUVVLElBQUFBLFNBQVMsRUFBRSxNQUFBO09BQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7O0lDZERnQixPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFLENBQUE7SUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDbkIsY0FBYyxHQUFHQSxjQUFjOzs7Ozs7In0=
