/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2023 Comcast
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default (component, watchers) => {
  component.prototype.___watchKeys = []
  component.prototype.___watchers = {}

  for (let watch in watchers) {
    if (typeof watchers[watch] !== 'function') {
      console.warn(`${watch} is not a function`)
    }

    component.prototype.___watchKeys.push(watch)

    component.prototype.___watchers[watch] = function (v, old) {
      watchers[watch].call(this, v, old)
    }
  }
}