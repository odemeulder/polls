export const QuestionApi = {
    getAll
  }

async function getAll() {
    const options = {
        method: "GET",
        headers: new Headers({
            Accept: "application/json"
        })
    }
    return await fetch(`/polls/api/questions/?format=json`, options).then(res => res.json())
}
