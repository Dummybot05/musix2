import time
import os




for i in range(40, 49):
  b = time.time_ns()
  c = b
  current_name = str(i)+'.mp3'
  new_name = str(c)+'.mp3'

  current_name2 = str(i)+'.lrc'
  new_name2 = str(c)+'.lrc'

  os.rename(current_name, new_name)
  os.rename(current_name2, new_name2)
