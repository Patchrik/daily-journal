/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    let entryIdMood 
    if (parseInt(entry.mood.id) === parseInt(entry.moodId)) {
        entryIdMood = entry.mood.mood
    }
	return `
        <li>
        <div id="entry--${entry.id}" class="journalEntry">
            <h4>Title: ${entry.concept}</h4>
            <p>${entry.entry}</p>
            <p>Date Written: ${entry.date}</p>
            <p>Mood: ${entryIdMood}</p>
        </div>
        </li>
    `;
};