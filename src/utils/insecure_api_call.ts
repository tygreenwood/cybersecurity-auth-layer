'use server'

export default async function InsecureApiCall({userId}) {
    console.log(`Execute expensive/sensitive API call for ${userId}`);
}