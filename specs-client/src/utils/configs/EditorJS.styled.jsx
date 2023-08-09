import { createGlobalStyle } from 'styled-components';

const EditorStyle = createGlobalStyle`
  #editorjs {
    width: 100%;
    color:black;
    background-color: #e9e9e9;
    overflow: hidden;
    text-overflow: hidden;
    padding: 1em;
    border: 8px solid #0A0A1B;
  }

  .ce-toolbar__content {
    @media only screen and (min-width: 701px) {
      left: 55px;
      max-width: none;
    }    
  }

  .ce-block__content{
    max-width: 100ch;
    overflow-wrap: break-word;
    @media only screen and (min-width: 701px) {
        margin:0 75px;
    }
  }

  .tc-table, .tc-wrap{
    --color-border: black;
  }

  .tc-table{
    border-left : 1px solid var(--color-border);
  }  

  .tc-row::after{
    --color-border: grey,
  }
  
`;

export { EditorStyle };
