type FeedBackRequest = {
    name: string,
    email: string,
    phone: string,
    question: string
}
type FeedBackError = {
    type: string,
    msg: string,
    loc: Array<string | number>

}

export type {FeedBackRequest, FeedBackError}