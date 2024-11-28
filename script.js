$(document).ready(function () {
    $("#tableForm").validate({
        rules: {
            minColumnValue: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            maxColumnValue: {
                required: true,
                number: true,
                range: [-50, 50],
                greaterThan: "#minColumnValue"
            },
            minRowValue: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            maxRowValue: {
                required: true,
                number: true,
                range: [-50, 50],
                greaterThan: "#minRowValue"
            }
        },
        messages: {
            minColumnValue: {
                required: "Please enter a value for Min Column.",
                number: "Must be a valid number.",
                range: "Must be between -50 and 50."
            },
            maxColumnValue: {
                required: "Please enter a value for Max Column.",
                number: "Must be a valid number.",
                range: "Must be between -50 and 50.",
                greaterThan: "Max Column must be greater than or equal to Min Column."
            },
            minRowValue: {
                required: "Please enter a value for Min Row.",
                number: "Must be a valid number.",
                range: "Must be between -50 and 50."
            },
            maxRowValue: {
                required: "Please enter a value for Max Row.",
                number: "Must be a valid number.",
                range: "Must be between -50 and 50.",
                greaterThan: "Max Row must be greater than or equal to Min Row."
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Puts the error right below the input field
        }
    });

    $.validator.addMethod("greaterThan", function (value, element, param) {
        return parseInt(value) >= parseInt($(param).val());
    }, "This value must be greater than or equal to the other field.");
});
