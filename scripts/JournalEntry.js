/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
	return `
        <li>
        <div id="entry--${entry.id}" class="journalEntry">
            <h4>${entry.concept}</h4>
            <p>${entry.entry}</p>
            <p>${entry.date}</p>
        </div>
        </li>
    `;
};
