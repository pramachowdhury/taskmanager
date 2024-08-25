const Faq = () => {
  return (
    <div className="w-[700px] mx-auto mt-10">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I create a new task?
        </div>
        <div className="collapse-content">
          <p>
            To create a new task, click on the Add Task button located on the
            dashboard. Fill in the task details such as title, description, and
            due date, and then click Save to add the task to your list.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I set reminders for my tasks?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can set reminders for your tasks. When creating or editing
            a task, look for the Reminder option and set the desired date and
            time. Youll receive a notification to remind you of the task.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I mark a task as completed?
        </div>
        <div className="collapse-content">
          <p>
            To mark a task as completed, simply click the checkbox next to the
            tasks title in your task list. The task will be moved to the
            Completed section and marked with a checkmark.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I categorize my tasks?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can categorize tasks by assigning them to different
            projects or labels. While creating or editing a task, select the
            appropriate category from the Project or Label dropdown menu to keep
            your tasks organized.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is there a way to search for tasks?
        </div>
        <div className="collapse-content">
          <p>
            Yes, there is a search feature available. Use the search bar at the
            top of the task list to enter keywords related to the task youre
            looking for. The list will filter to show only tasks that match your
            search criteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
