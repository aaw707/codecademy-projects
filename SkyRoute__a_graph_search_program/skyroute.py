# these 4 files are provided by the course
from graph_search import bfs, dfs
from vc_metro import vc_metro
from vc_landmarks import vc_landmarks
from landmark_choices import landmark_choices

# a list of landmarks
landmark_string = ''
for letter, landmark in landmark_choices.items():
  landmark_string += f"{letter} - {landmark}\n"

# stations under construction
stations_under_construction = []

# greeting messages
def greet():
  print("Hi there and welcome to SkyRoute!")
  print("We'll help you find the shortest route between the following Vancouver landmarks:\n" + landmark_string)

# main wrapper
def skyroute():
  greet()
  new_route()
  goodbye()

# main function that gets start/end point, the shortest route if possible, and repeat on demand
def new_route(start_point = None, end_point = None):
  start_point, end_point = set_start_and_end(start_point, end_point)
  if start_point == end_point:
    print("You are hanging around the same area. No transportation needed.")
  else:
    shortest_route = get_route(start_point, end_point)
    if shortest_route == None:
      # some stations don't have routes in between 
      # some routes become unavailable upon construction
      print("There is no known route between these two landmarks. Possibly due to maintenance.")
    else:
      shortest_route_string = '\n'.join(shortest_route)
      print(f"The shortest metro route from {start_point} to {end_point} is:\n {shortest_route_string}")

  # let the user see another route if needed    
  again = input("Would you like to see another route?: Enter y/n: ")
  if again == 'y':
    show_landmarks()
    new_route(start_point, end_point)

# get start/end point from the user by choice
def set_start_and_end(start_point, end_point):
  if start_point:
    change_point = input("What would you like to change? You can enter 'o' for 'origin', 'd' for 'destination, or 'b' for 'both':")
    if change_point == 'b':
      start_point = get_start()
      end_point = get_end()
    elif change_point == 'o':
      start_point = get_start()
    elif change_point == 'd':
      end_point = get_end()
    else:
      print("Oops, that isn't 'o', 'd', or 'b'...")
      set_start_and_end(start_point, end_point)
  else:
    start_point = get_start()
  end_point = get_end()
  return start_point, end_point

# get start point from user
def get_start():
  start_point_letter = input("Where are you coming from? Type in the corresponding letter: ")
  if start_point_letter in list(landmark_choices.keys()):
    start_point = landmark_choices[start_point_letter]
    return start_point
  else:
    print("Sorry, that's not a landmark we have data on. Let's try this again...")
    get_start()

# get end point from user
def get_end():
  end_point_letter = input("Ok, where are you headed? Type in the corresponding letter: ")
  if end_point_letter in list(landmark_choices.keys()):
    end_point = landmark_choices[end_point_letter]
    return end_point
  else:
    print("Sorry, that's not a landmark we have data on. Let's try this again...")
    get_start()

# get the routes between two stations and return the shortest
def get_route(start_point, end_point):
  start_stations = vc_landmarks[start_point]
  end_stations = vc_landmarks[end_point]
  routes = []
  for start_station in start_stations:
    for end_station in end_stations:
      # when there are stations under construction, update the metro map
      metro_system = get_active_stations() if stations_under_construction else vc_metro
      route = bfs(metro_system, start_station, end_station)
      if route:
        routes.append(route)
  if routes == []:
    return None
  else: 
    shortest_route = min(routes, key = len)
    return shortest_route

# show the list of landmarks on demand
def show_landmarks():
  see_landmarks = input("Would you like to see the list of landmarks again? Enter y/n: ")
  if see_landmarks == 'y':
    print(landmark_string)

# eliminate the stations in construction from the metro map
def get_active_stations():
  updated_metro = vc_metro
  for station_under_construction in stations_under_construction:
    for current_station, neighboring_station in vc_metro.items():
      if current_station != station_under_construction:
        # remove the station under construction from other station's connections
        updated_metro[current_station] -= set(stations_under_construction)
      else:
        updated_metro[current_station] = set([])
  return updated_metro

# ending message
def goodbye():
  print("Thanks for using SkyRoute!")

# calling the main function
skyroute()