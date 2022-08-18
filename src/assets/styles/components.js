import { createGlobalStyle } from "styled-components"

const Components = createGlobalStyle`

:root
{
    /*site color */
    --color-primary : #27AE60;
    --color-primary-50 :#93D7AF;
    --color-secondary : #EB5757; 
    --gray-100 : #333333;
    --gray-50 : #828282;
    --gray-20 : #E0E0E0;
    --gray-0 : #F5F5F5;

    /*fonts size*/
    --heading-1 :1.625rem;
    --heading-2 : 1.375rem;
    --heading-3 : 1.125rem;
    --heading-4 : 0.875rem;
    --headline : 1rem;
    --body : 0.875rem;
    --body-600 : 0.875rem;
    --caption : 0.75rem;
    
    /*toast color*/
    --negative : #E60000;
    --warning : #FFCD07;
    --success : #168821;
    --information : #155BCB;
}
`
export default Components