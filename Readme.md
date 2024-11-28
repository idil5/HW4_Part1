Name: Idil Hassan
ID: 02110597

# Part 1: Using the jQuery Validation Plugin with Your Dynamic Table

## **Introduction**
This part of the assignment focuses on implementing form validation for a dynamic multiplication table application using the jQuery Validation Plugin. It enhances the user experience by catching input errors early, providing meaningful error messages, and ensuring that the form behaves as intended. No table is generated, this part is just fouced on jQuery validation.

1. **Validation with jQuery Validation Plugin**:
   - All input fields (`minColumnValue`, `maxColumnValue`, `minRowValue`, `maxRowValue`) are validated using the jQuery Validation Plugin.
   - Rules include:
     - Required fields.
     - Numerical input.
     - Range enforcement between `-50` and `50`.
     - Logical checks (`max` values must be greater than or equal to `min` values).

2. **Custom Error Messages**:
   - Error messages are tailored to be precise and helpful:
     - Indicate the exact issue (e.g., "Must be between -50 and 50").
     - Suggest corrective actions.

3. **Dynamic Error Placement**:
   - Error messages appear directly below the corresponding input field for clear guidance.


# Resources
https://www.w3schools.com/jquery/default.asp
