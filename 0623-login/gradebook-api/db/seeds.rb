ix = Teacher.create(username: "Ix", password: "abc123", subject: "JS")
louis = Teacher.create(username: "Louis", password: "abc123", subject: "React")
dakota = Teacher.create(username: "Dakota", password: "abc123", subject: "Ruby")

cb = Course.create(teacher: ix, name: "Callbacks 101")
hooks = Course.create(teacher: louis, name: "React but Hooks")
class_comp = Course.create(teacher: louis, name: "Class Based Components")

Assignment.create(course: cb, name: "Map, Filter, Reduce")
Assignment.create(course: hooks, name: "UseEffect")
Assignment.create(course: hooks, name: "UseState")
