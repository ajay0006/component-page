import TabButton from "../Tab-buton/TabButton";
import {EXAMPLES} from "../../data";
import {useState} from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('')
    let tabContent = ""
    const buttons = (
        <>
            {/*ideally I would have used props directly, but instead I will use the children*/}
            {/*doesn't make sense? well, the "Component" string here isn't passed the usual way you know*/}
            {/*that usual way being props
                        declared between < & > because the string is being passed between */}
            {/*the tags "TabButton" it gets automatically passed as a child, that way we can access it */}
            {/*within the TabButton component using props.children*/}
            <TabButton isSelected={selectedTopic === 'components'}
                       onClick={() => handleClick('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
                       onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
                       onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
                       onClick={() => handleClick('state')}>State</TabButton>
        </>
    )

    function handleClick(selectedBtn) {
        setSelectedTopic(selectedBtn)
    }
    if (selectedTopic) {
        tabContent =
             <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
             </div>
    }
    return (
        <Section title="Examples" id='examples'>
            <Tabs buttons = {buttons} >{tabContent}</Tabs>
        </Section>
    )

}
