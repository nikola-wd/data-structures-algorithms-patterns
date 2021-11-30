# https: // runestone.academy/runestone/books/published/pythonds/BasicDS/SimulationPrintingTasks.html

""" 4.14.1. Main Simulation Steps
Here is the main simulation.

Create a queue of print tasks. Each task will be given a timestamp upon its arrival. The queue is empty to start.

For each second(currentSecond):

Does a new print task get created? If so, add it to the queue with the currentSecond as the timestamp.

If the printer is not busy and if a task is waiting,

Remove the next task from the print queue and assign it to the printer.

Subtract the timestamp from the currentSecond to compute the waiting time for that task.

Append the waiting time for that task to a list for later processing.

Based on the number of pages in the print task, figure out how much time will be required.

The printer now does one second of printing if necessary. It also subtracts one second from the time required for that task.

If the task has been completed, in other words the time required has reached zero, the printer is no longer busy.

After the simulation is complete, compute the average waiting time from the list of waiting times generated.

 """


import random


class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)


""" The Printer class (Listing 2) will need to track whether it has a current task. If it does, then it is busy(lines 13–17) and the amount of time needed can be computed from the number of pages in the task. The constructor will also allow the pages-per-minute setting to be initialized. The tick method decrements the internal timer and sets the printer to idle(line 11) if the task is completed. """

# -----------------------------------------------------------------------------


class Printer:
    def __init__(self, ppm):
        self.pagerate = ppm
        self.currentTask = None
        self.timeRemaining = 0

    def tick(self):
        if self.currentTask != None:
            self.timeRemaining -= 1
            if self.timeRemaining <= 0:
                self.currentTask = None

    def busy(self):
        if self.currentTask != None:
            return True
        else:
            return False

    def startNext(self, newTask):
        self.currentTask = newTask
        self.timeRemaining = newTask.getPages() * 60/self.pagerate


""" The Task class (Listing 3) will represent a single printing task. When the task is created, a random number generator will provide a length from 1 to 20 pages. We have chosen to use the randrange function from the random module. """

# -----------------------------------------------------------------


class Task:
    def __init__(self, time):
        self.timestamp = time
        self.pages = random.randrange(1, 21)

    def getStamp(self):
        return self.timestamp

    def getPages(self):
        return self.pages

    def waitTime(self, currenttime):
        return currenttime - self.timestamp


""" The main simulation(Listing 4) implements the algorithm described above. The printQueue object is an instance of our existing queue ADT. A boolean helper function, newPrintTask, decides whether a new printing task has been created. We have again chosen to use the randrange function from the random module to return a random integer between 1 and 180. Print tasks arrive once every 180 seconds. By arbitrarily choosing 180 from the range of random integers(line 32), we can simulate this random event. The simulation function allows us to set the total time and the pages per minute for the printer. """


def newPrintTask():
    num = random.randrange(1, 181)
    if num == 180:
        return True
    else:
        return False

# -----------------------------------------------------------------


def simulation(numSeconds, pagesPerMinute):
    labprinter = Printer(pagesPerMinute)
    printQueue = Queue()
    waitingtimes = []

    for currentSecond in range(numSeconds):
        if newPrintTask():
            task = Task(currentSecond)
            printQueue.enqueue(task)

        if (not labprinter.busy()) and (not printQueue.isEmpty()):
            nexttask = printQueue.dequeue()
            waitingtimes.append(nexttask.waitTime(currentSecond))
            labprinter.startNext(nexttask)

        labprinter.tick()

    averageWait = sum(waitingtimes)/len(waitingtimes)
    print("Average Wait %6.2f secs %3d tasks remaining." %
          (averageWait, printQueue.size()))


# ---------------------------------------------------------------
for i in range(10):
    simulation(3600, 5)
