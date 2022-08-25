const createCalendar = () => {
  const wrapper = document.querySelector(".wrapper");

  const calendarTemplate = `
    <div class="calendar">
      <div class="calendar-header">
        <div class="calendar-year">Tháng 8, 2022</div>
      </div>
      <div class="calendar-content">
        <table class="calendar-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="other">31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td class="calendar-birthday">
                <span>26</span>
              </td>
              <td>27</td>
            </tr>
            <tr>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td class="other">1</td>
              <td class="other">2</td>
              <td class="other">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  wrapper.insertAdjacentHTML("beforeend", calendarTemplate);
};

export default createCalendar;
