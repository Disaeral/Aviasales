import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_TICKETS, REQUEST_TICKETS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_TICKETS, sagaWorker);
}

function* sagaWorker() {
  const payload = yield call(fetchTickets);
  yield put({ type: LOAD_TICKETS, payload: payload.tickets });
}

async function fetchTickets() {
  try {
    const response = await fetch("https://front-test.beta.aviasales.ru/search");
    let searchId = await response.json();
    searchId = searchId.searchId;
    const request = await fetch(
      "https://front-test.beta.aviasales.ru/tickets?" +
        new URLSearchParams({ searchId: searchId.toString() })
    );
    const data = await request.json();

    return await data;
  } catch (e) {
    console.error(e);
  }
}
