import styled from "@emotion/styled";

const lightBlue = "#5684AE";
const darkBlue = "#0F4C81";
const titleColor = "#E4F6ED";
const lightOrange = "#FFE4C8";
const darkOrange = "#F9BE81";

export const StyleWrapper = styled.div`
  .fc .fc-button-primary {
    color: ${darkBlue} !important;
    background-color: transparent !important;
    border-color: ${darkBlue} !important;
  }

  .fc-daygrid-day-number {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
  .fc .fc-daygrid-day-frame {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .fc .fc-today-button {
    color: ${darkBlue};
    background: transparent;
    border-color: ${darkBlue};
    border-radius: 13px;
    padding: 0.4em 1em;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin: 1.5em;
  }

  .fc .fc-prev-button,
  .fc .fc-next-button {
    background-color: transparent;
    color: ${darkBlue};
    border: none;
  }

  .fc .fc-prev-button:focus,
  .fc .fc-next-button:focus {
    background-color: transparent;
    color: ${darkBlue};
    border: none;
    background-color: transparent;
    border-color: transparent;
    color: ${darkBlue};
    box-shadow: none;
  }

  .fc .fc-prev-button:active,
  .fc .fc-next-button:active {
    background-color: transparent;
    color: ${darkBlue};
    border: none;
    background-color: transparent;
    border-color: transparent;
    color: ${darkBlue};
    box-shadow: none;
  }

  .fc .fc-prev-button:focus-visible,
  .fc .fc-next-button:focus-visible {
    background-color: transparent;
    color: ${darkBlue};
    border: none;
    background-color: transparent;
    border-color: transparent;
    color: ${darkBlue};
    box-shadow: none;
  }

  .fc .fc-prev-button:not(:first-of-type),
  .fc .fc-next-button:not(:first-of-type) {
    background-color: transparent;
    color: ${darkBlue};
    border: none;
    background-color: transparent;
    border-color: transparent;
    color: ${darkBlue};
    box-shadow: none;
  }

  .fc .fc-dayGridMonth-button,
  .fc .fc-timeGridDay-button,
  .fc .fc-timeGridWeek-button {
    background-color: ${lightBlue} !important;
    color: white !important;
    padding: 0.4em 1em !important;
    border-radius: 15px !important;
    margin: 0 5px;
  }

  .fc .fc-toolbar-title {
    color: ${darkBlue} !important;
    font-weight: bold;
  }
  .fc-toolbar-chunk {
    display: flex;
  }

  .fc-day-today {
    background-color: transparent !important;
  }

  .fc-daygrid-day-number {
    margin-top: 6px;
  }
  .fc-day-today .fc-daygrid-day-number {
    background-color: ${darkBlue} !important;
    color: white;
    height: fit-content;
    border-radius: 50% !important;
    width: fit-content;
    padding: 2px 8px;
  }

  @media (max-width: 768px) {
    .fc-event-title {
      display: none !important;
    }
    .fc .fc-daygrid-day {
      border: none !important; 
    }

    .fc .fc-col-header-cell {
      border: none !important; 
    }
  }
`;
