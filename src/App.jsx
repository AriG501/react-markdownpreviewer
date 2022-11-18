import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...

  And here's some other cool stuff:

  This is a link to a website:
  [Link](https://www.example.com)

  Some multi-line code:

  \`\`\`
  for(let i = 0; i < cid.length; i++) {
    cid[i][1] = cid[i][1] * 1000
  }
  cid = cid.reverse()
  \`\`\`

  And an object
  \`\`\`
  let person = {
    "firstName": "Michael"
    "lastName": "Smith"
    "age": 37
  }
  \`\`\`

And some bullet points:

  - Item 1
  - Item 2
  - Item 3


  And a block quote!
  > Block Quote

  \`And here is some\` **bold text**

  ![React-logo](https://www.alioze.com/wp-content/uploads/2016/11/react-js.png)
  `)

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className="editor-container">
        <div id="editor-title">Editor</div>
        <textarea
          id="editor"
          onChange={(event) => {
            setText(event.target.value)
          }}
          value={text}
          ></textarea>
      </div>
    <div className="preview-container">
      <div id="preview-title">Preview</div>
          <div 
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
    </div>
  </div>
  )
}

export default App
