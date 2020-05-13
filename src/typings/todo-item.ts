/**
 * To do item representation
 *
 * @export
 * @interface ToDoItem
 */
export interface ToDoItem {
    /**
     * if item is checked
     *
     * @type {boolean}
     * @memberof ToDoItem
     */
    checked: boolean;
    /**
     * value for display
     *
     * @type {string}
     * @memberof ToDoItem
     */
    label: string;
}