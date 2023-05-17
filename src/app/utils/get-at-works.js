const airtableTools = require('./airtable')
module.exports = async () => {
    const records = await airtable.findMany({
        baseId: process.env.AIRTABLE_2223_WORK_BASE,
        table: "Works"
    })
    return records
}
